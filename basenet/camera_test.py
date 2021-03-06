import cv2
import numpy as np
import time

cap = cv2.VideoCapture(3, cv2.CAP_DSHOW)  # 0 for 1st webcam

while True:

    classes = ['extruder', 'buildplate', 'axis']
    print(cv2.__version__)

    with open("coco.names", "r") as f:
        classes = [line.strip() for line in f.readlines()]
    # net = cv2.dnn.readNetFromDarknet("yolov3.cfg", "yolov3.weights")
    net = cv2.dnn.readNetFromDarknet("yolov3-custom.cfg", "newFinal.weights")

    layer_names = net.getLayerNames()
    outputlayers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
    colors = np.random.uniform(0, 255, size=(len(classes), 3))

    # loading image

    font = cv2.FONT_HERSHEY_PLAIN
    starting_time = time.time()
    frame_id = 0

    _, frame = cap.read()  #
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame_id += 1

    height, width, channels = frame.shape
    # detecting objects
    blob = cv2.dnn.blobFromImage(frame, 0.00392, (416, 416), (0, 0, 0), True, crop=False)

    net.setInput(blob)
    outs = net.forward(outputlayers)

    # Showing info on screen/ get confidence score of algorithm in detecting an object in blob
    class_ids = []
    confidences = []
    boxes = []
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.3:
                # print("detected")
                # onject detected
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # cv2.circle(img,(center_x,center_y),10,(0,255,0),2)
                # rectangle co-ordinaters
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                # cv2.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)

                boxes.append([x, y, w, h])  # put all rectangle areas
                confidences.append(
                    float(confidence))  # how confidence was that object detected and show that percentage
                class_ids.append(class_id)  # name of the object tha was detected

    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.4, 0.6)

    for i in range(len(boxes)):
        if i in indexes:
            x, y, w, h = boxes[i]
            label = str(classes[class_ids[i]])
            confidence = confidences[i]
            color = colors[class_ids[i]]
            cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
            cv2.putText(frame, label + " " + str(round(confidence, 2)), (x, y + 30), font, 1, (255, 255, 255), 2)

    cv2.imshow("Image", frame)
    key = cv2.waitKey(1)  # wait 1ms the loop will start again and we will process the next frame
    # suc, jpeg = cv2.imencode('.jpg', frame)
    # print (jpeg.tobytes)




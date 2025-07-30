
client sends Request to server -> node server stores it in a event queue -> one by one those requests are sent to event loop

event loop can get two types of requests
    1. blocking operations ------------ synchronous task --> look for a thread to complete this task [thread pool] --> resturns the result
    2. non blocking operations --------> asynchronous task --> task executes and returns at the same time 





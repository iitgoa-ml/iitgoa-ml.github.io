class Meeting {
    constructor(date_and_time, venue, topic, abstract_link = "", slides_link = "") {
        this.date_and_time = date_and_time;
        this.venue = venue;
        this.topic = topic;
        this.abstract_link = abstract_link;
        this.slides_link = slides_link;
    }
}

var meeting_list = new Array();
meeting_list.push(new Meeting(
    date_and_time = '3-4 PM, January 17, 2019',
    venue = 'LH-1',
    topic = 'ML Circle Inception',
    abstract_link = 'meetings/abstracts/ML Circle Inception Abstract.pdf',
    slides_link = 'meetings/slides/ML Circle Inception.pdf'));

meeting_list.push(new Meeting(
    date_and_time = '3:10 - 4:10 PM, January 31, 2019',
    venue = 'LH-2',
    topic = 'Linear regression using Gradient Descent (by Abhishek Varghese)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 1.pdf',
    slides_link = 'https://prezi.com/view/fDCGpAX3gdSSuiulon8C/'));
    
meeting_list.push(new Meeting(
    date_and_time = '3 PM onwards, February 2, 2019',
    venue = 'LH-2',
    topic = 'Linear regression using Gradient Descent (by Abhishek Varghese)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 1.pdf',
    slides_link = 'https://prezi.com/view/fDCGpAX3gdSSuiulon8C/'));

meeting_list.push(new Meeting(
    date_and_time = '5 PM onwards, February 14, 2019',
    venue = 'LH-2',
    topic = 'Convergence analysis of gradient descent (by Shivam Pandey)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 2.pdf'));

meeting_list.push(new Meeting(
    date_and_time = '5:30 - 6:30 PM, April 2, 2019',
    venue = 'CL-3',
    topic = 'Introduction to Convex Optimization (by Abhilasha Gupta and Mahesh Barve)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 3.pdf'));
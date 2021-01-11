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
    date_and_time = 'Jan 17, 2019, 3-4 pm',
    venue = 'LH-1',
    topic = 'ML Circle Inception',
    abstract_link = 'meetings/abstracts/ML Circle Inception Abstract.pdf',
    slides_link = 'meetings/slides/ML Circle Inception.pdf'));

meeting_list.push(new Meeting(
    date_and_time = 'Jan 31, 2019, 3:10-4:10 pm',
    venue = 'LH-2',
    topic = 'Linear regression using Gradient Descent (by Abhishek Varghese)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 1.pdf',
    slides_link = 'https://prezi.com/view/fDCGpAX3gdSSuiulon8C/'));
    
meeting_list.push(new Meeting(
    date_and_time = 'Feb 02, 2019, 3 pm',
    venue = 'LH-2',
    topic = 'Linear regression using Gradient Descent (by Abhishek Varghese)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 1.pdf',
    slides_link = 'https://prezi.com/view/fDCGpAX3gdSSuiulon8C/'));

meeting_list.push(new Meeting(
    date_and_time = 'Feb 14, 2019, 5 pm',
    venue = 'LH-2',
    topic = 'Convergence analysis of gradient descent (by Shivam Pandey)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 2.pdf'));

meeting_list.push(new Meeting(
    date_and_time = 'Apr 02, 2019, 5:30-6:30 pm',
    venue = 'CL-3',
    topic = 'Introduction to Convex Optimization (by Abhilasha Gupta and Mahesh Barve)',
    abstract_link = 'meetings/abstracts/ML Circle _ Meeting - 3.pdf',
    slides_link = 'meetings/slides/Convex_Optimization__ML_circle.pdf'));

meeting_list.push(new Meeting(
    date_and_time = 'Aug 14, 2019, 3-4 pm',
    venue = 'CL-2',
    topic = 'Topic Modeling: 1. General Introduction to Learning (by Dr. Sreejith A. V).',
    abstract_link = '',
    slides_link = ''));

meeting_list.push(new Meeting(
    date_and_time = 'Aug 22, 2019, 5-6 pm',
    venue = 'CL-2',
    topic = 'Topic Modeling: 2. Understanding Singular Value Decomposition (SVD) by Dr. Lok Pati Tripathi',
    abstract_link = '',
    slides_link = ''));

meeting_list.push(new Meeting(
    date_and_time = 'Aug 29, 2019, 5-6 pm',
    venue = 'CL-2',
    topic = 'Topic Modeling: 3. Applications of Singular Value Decomposition (SVD), Matrix Norms, k-rank Approximations (by Dr. Lok Pati Tripathi)',
    abstract_link = '',
    slides_link = ''));


meeting_list.push(new Meeting(
    date_and_time = 'Sep 05, 2019, 5-6 pm',
    venue = 'CL-2',
    topic = 'Topic Modeling: 4. Overview of various algebraic approaches for topic modeling (by Dr. Clint P. George)',
    abstract_link = '',
    slides_link = ''));

meeting_list.push(new Meeting(
    date_and_time = 'Sep 19, 2019, 5-6 pm',
    venue = 'Lab 2',
    topic = 'Topic Modeling: 5. Probabilistic topic models (by Dr. Clint P. George)',
    abstract_link = '',
    slides_link = ''));

meeting_list.push(new Meeting(
    date_and_time = 'Oct 01, 2019, 5-6 pm',
    venue = 'CL-2',
    topic = 'Topic Modeling: 6. Matrix and vector norms and applications in SVD (by Dr. Lok Pati Tripathi)',
    abstract_link = '',
    slides_link = ''));

meeting_list.push(new Meeting(
    date_and_time = 'Jul 11, 2020, 11 am',
    venue = 'Online',
    topic = 'MDP and Introduction to Reinforcement Learning (by Abhishek Varghese)',
    abstract_link = '',
    slides_link = 'https://prezi.com/view/y86QjOIJ7y9YQeelZDyC/'));

meeting_list.push(new Meeting(
    date_and_time = 'Jan 11, 2021, 11:15 am',
    venue = 'Online',
    topic = 'ML Circle Inception (by Dr. Clint P. George)',
    abstract_link = '',
    slides_link = 'meetings/slides/Probability Theory - Part 1.pdf'));

meeting_list.push(new Meeting(
    date_and_time = 'Jan 11, 2021, 11:30 am',
    venue = 'Online',
    topic = 'Probability Theory Discussion Series - 1 (by Abhishek Varghese)',
    abstract_link = '',
    slides_link = 'meetings/slides/Probability Theory - Part 1.pdf'));


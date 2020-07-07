
//any time want to use some code from another file or
//another open source project or dependency we have to add
//an import

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//the ./ means look in the same folder

//css library got from http://semantic-ui.com
//install by searching semantic ui cdn copied the link semantic.min.css
//then add that libarary new css file to the head tag in index.html
//also use library faker js. great for getting fake data for initial projects
//in terminal got that by running npm install --save faker this means want 
//to save it into our local project whihc will then make new entry inside 
//package.jason file
//the app is the parent comonent and the comments are the child comonents.
const App = () => {
    return (
        <div className = "ui container comments">
            {/**If want to show one compenent inside anther we
            refer to it as a jsx tag 
            {} is a way of accesing JS variables in JSX*/}

            <ApprovalCard>
                Are you sure you want to this?
            </ApprovalCard>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to this?
                </div>
                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText= "hello"
                    avatar= {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author = "Alex" 
                    timeAgo="Today at 2:00PM" 
                    commentText = "Nice"
                    avatar= {faker.image.avatar()}
                />
             </ApprovalCard>
            <CommentDetail 
                author = "John" 
                timeAgo="Yestursday at 5:00PM" 
                commentText="what day is it"
                avatar= {faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
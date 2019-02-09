import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 6:00PM" 
                    blogText="Howdy there! Nice blog!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Paul" 
                    timeAgo="Today at 4:45PM" 
                    blogText="Very nice!Didn't read it though.."
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>  

            <ApprovalCard>
                <CommentDetail 
                    author="Gottier" 
                    timeAgo="Today at 3:10PM" 
                    blogText="Wait what? Hol'up a second..."
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            

            <ApprovalCard>
                <CommentDetail 
                    author="user21" 
                    timeAgo="Yesterday at 10:22PM" 
                    blogText="Loved your blog! Keep up the good work!"
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>       
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
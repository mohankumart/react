import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Mohan"
                    timeAgo="Today at 4:45pm"
                    comment="Hello world!!!"
                    avatar={faker.image.avatar()}
                ></CommentDetail>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Kumar"
                    timeAgo="Today at 4:45pm"
                    comment="Hello world!!!"
                    avatar={faker.image.avatar()}
                ></CommentDetail>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));

import React from 'react';
import faker from 'faker';
function CommentBox(){
    return(
        <div className="ui cards">
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" style={{width:"50px",height:"50px"}} src={faker.image.image()} />
      <div className="header">
        Elliot Fu
      </div>
      <div className="meta">
        Friends of Veronika
      </div>
      <div className="description">
        Elliot wants to add you to the group <b>best friends</b>
      </div>
    </div> 
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <img className="right floated mini ui image" style={{width:"50px",height:"50px"}} src={faker.image.image()} />
      <div className="header">
        Jenny Hess
      </div>
      <div className="meta">
        New Member
      </div>
      <div className="description">
        Jenny requested permission to view your contact details
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>
    );
}
export default CommentBox;
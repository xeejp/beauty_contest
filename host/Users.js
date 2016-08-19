import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'

const User = ({ id, number , inputed}) => (
  <tr><td>{id}</td><td>{number}</td><td>{inputed}</td></tr>
)

const UsersList = ({participants}) => (
  <table>
    <thead><tr><th>id</th><th>number</th><th>inputed</th><th></th></tr></thead>
    <tbody>
      {
        Object.keys(participants).map(id => (
          <User
            key={id}
            id={id}
            number ={participants[id].number}
            inputed={participants[id].inputed ? "投票済" : "未投票"}
          />
        ))
      }
    </tbody>
  </table>
)

const mapStateToProps = ({ participants ,inputs}) => ({ participants ,inputs})

const Users = ({ participants ,inputs}) => (
  <div>
    <Card>
      <CardHeader
        title={"Users (" + Object.keys(participants).length + "人) " + inputs + "人投票済み"}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <UsersList
          participants={participants}
        />
      </CardText>
    </Card>
   </div>
)

export default connect(mapStateToProps)(Users)

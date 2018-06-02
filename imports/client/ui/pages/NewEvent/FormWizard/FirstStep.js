import React from 'react'
import AutoField from '/imports/client/utils/uniforms-custom/AutoField'

const FirstStep = ({ show }) => (
  <div id='first-step'>

    <AutoField name='name' />
    <AutoField name='address' />
    <AutoField name='categories' />
    <AutoField name='engagement.limit' />

  </div>
)

export default FirstStep

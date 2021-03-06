import PropTypes from 'prop-types'
import React from 'react'
import { Button, TextInput } from 'react-native'

import ButtonContainer from 'ss/common/components/ButtonContainer'
import Colors from 'ss/common/constants/colors'

class ItemAddEdit extends React.Component {
  static propTypes = {
    addButtonTitle: PropTypes.string.isRequired,
    adding: PropTypes.bool.isRequired,
    buttonColor: PropTypes.string,
    cancelButtonTitle: PropTypes.string.isRequired,
    onHandleChangeText: PropTypes.func.isRequired,
    onHandlePressAdd: PropTypes.func.isRequired,
    onHandlePressCancel: PropTypes.func.isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string.isRequired
  }

  render () {
    const {
      active,
      addButtonTitle = 'add',
      adding,
      buttonColor = Colors.Teal,
      cancelButtonTitle = 'Cancel',
      onHandleChangeText,
      onHandlePressAdd,
      onHandlePressCancel,
      onHandleSubmit,
      placeholder = '',
      text
    } = this.props

    if (!active) {
      return null
    }

    if (adding) {
      return (
        <>
          <ButtonContainer>
            <TextInput
              onChangeText={onHandleChangeText}
              onSubmitEditing={onHandleSubmit}
              placeholder={placeholder}
              underlineColorAndroid={Colors.Teal}
              value={text}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              onPress={onHandlePressCancel}
              title={cancelButtonTitle}
              color={Colors.SunsetOrange}
            />
          </ButtonContainer>
        </>
      )
    }

    return (
      <ButtonContainer>
        <Button
          onPress={onHandlePressAdd}
          title={addButtonTitle}
          color={buttonColor}
        />
      </ButtonContainer>
    )
  }
}

export default ItemAddEdit

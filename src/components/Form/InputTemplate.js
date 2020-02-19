import React, {useState, useEffect} from 'react';
import { View, Text, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { inputModeStyles, styles } from './styles';

const InputTemplate = (locals) => { 

//  const [inputLabel, setInputLabel] = useState('');

  var containerStyle, inputStyle, fullContainer;

  if (locals.hidden)  return null;
  
  if (locals.hasError) 
    containerStyle = inputModeStyles.containerError;
  else 
    containerStyle = inputModeStyles.containerNormal;
  

  if (!locals.editable) {}
    
  let inputType, iconName;
  switch(locals.config.type) {
    case 'phone': { inputType = 'phone-pad', iconName = 'smartphone' }; break;
    case 'password': { inputType = 'default', iconName = 'lock' }; break;
    case 'username': { inputType = 'default', iconName = 'user' }; break;
    case 'email': { inputType = 'email-address', iconName = 'mail' }; break;
    case 'number': { inputType = 'numeric', iconName = 'smartphone' }; break;      
    default: inputType = iconName = 'default';
  }

  const help = locals.help ? <Text style={styles.helpText}>{locals.help}</Text> : null;
  const error = locals.hasError && locals.error ? <Text style={styles.errorText}>{locals.error}</Text> : null;

  return (
    <View style={fullContainer}>

      <View style={containerStyle}>
        <Icon style={styles.inputIcon} name={iconName} />
        <TextInput 
          style={styles.inputStyle}
          keyboardType={inputType}
          secureTextEntry={locals.config.type === 'password'}

          onChangeText={value => locals.onChange(value)}
          onChange={locals.onChangeNative}
          AuthibilityLabel={locals.label}
          ref={locals.ref}
          allowFontScaling={locals.allowFontScaling}
          autoCapitalize={locals.autoCapitalize}
          autoCorrect={locals.autoCorrect}
          autoFocus={locals.autoFocus}
          blurOnSubmit={locals.blurOnSubmit}
          editable={locals.editable}
          maxLength={locals.maxLength}
          multiline={locals.multiline}
          onBlur={locals.onBlur}
          onEndEditing={locals.onEndEditing}
          onFocus={locals.onFocus}
          onLayout={locals.onLayout}
          onSelectionChange={locals.onSelectionChange}
          onSubmitEditing={locals.onSubmitEditing}
          onContentSizeChange={locals.onContentSizeChange}
          placeholderTextColor={locals.placeholderTextColor}
          selectTextOnFocus={locals.selectTextOnFocus}
          selectionColor={locals.selectionColor}
          numberOfLines={locals.numberOfLines}
          clearButtonMode={locals.clearButtonMode}
          clearTextOnFocus={locals.clearTextOnFocus}
          enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
          keyboardAppearance={locals.keyboardAppearance}
          onKeyPress={locals.onKeyPress}
          returnKeyType={locals.returnKeyType}
          selectionState={locals.selectionState}
          placeholder={locals.placeholder}
          value={locals.value}
          testID={locals.testID}
          textContentType={locals.textContentType}
        />
      </View>
      { error }
      { help }
    </View>
  )
}

export default InputTemplate;
import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import ps from 'react-native-ps'

const SIZE = 24

/**
 * A system icon, or UI icon, symbolizes a command, file, device, or directory.
 * System icons are also used to represent common actions like trash, print,
 * and save.
 *
 * The Icon's name maps to the material icons font.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { Icon } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
 *          <Icon name="thumb_up" />
 *          <Icon name="label" />
 *          <Icon name="toc" />
 *        </View>
 *
 */
class Icon extends Component {
  render() {
    const { name, style, children, ...other } = this.props

    return (
      <Text
        style={[
          styles.base,
          {
            height: SIZE,
            width: SIZE,

            fontSize: SIZE,
            lineHeight: SIZE,
          },
        ].concat(style)}
        {...other}>
        {name}
        {children}
      </Text>
    )
  }
}

Icon.propTypes = {
  /**
   * The name of the icon, from the material icons font.
   */
  name: PropTypes.string.isRequired,

  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default Icon

const styles = ps({
  base: {
    fontFamily: 'MaterialIcons-Regular',
  },


  web: {
    base: {
      wordWrap: 'normal',
      fontFeatureSettings: '\'liga\'',
    },
  },
})

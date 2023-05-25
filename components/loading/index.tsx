import React from 'react'
import Lottie from 'react-lottie-player'
import { replaceColor } from 'lottie-colorify'
import { useTheme } from 'next-themes'

import lottieloading from '@components/icons/lottie/loading.json'

const Loading = () => {
  const { theme } = useTheme()

  const loadingAnimationData: JSON =
    theme === 'dark'
      ? replaceColor('#000000', '#ffffff', lottieloading)
      : lottieloading

  return (
    <Lottie
      play
      loop
      animationData={loadingAnimationData}
      style={{
        width: 300,
        height: 300,
        margin: '0 auto',
        marginBottom: '-50px',
        marginTop: '-50px'
      }}
      audioFactory={undefined}
    />
  )
}

export default Loading

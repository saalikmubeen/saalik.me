const withIcon = (icon: string) => {
  const Icon = ({
    size = 24,
    style = {},
    color = 'currentColor',
    viewBox = '0 0 24 24'
  }) => {
    return (
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        fill={color}
        dangerouslySetInnerHTML={{ __html: icon }}
        style={style}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    )
  }

  return Icon
}

export default withIcon

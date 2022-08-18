const effectsStyle = { fill: 'var(--name)' }
const bookStyle = {
  fill: 'none',
  stroke: '#3859FF',
  strokeWidth: '8',
  strokeLinejoin: 'round'
}

const Ensico = ({ className = {} }) => {
  return (
    <svg viewBox="0 0 184.6 130.4" className={className}>
      <path
        style={effectsStyle}
        d="M55.1,108.5c-12.1,0-21.9,9.8-21.9,21.9v0h21.9V108.5z"
      />
      <rect
        style={effectsStyle}
        x="5.6"
        y="5.6"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.8939 19.0592)"
        width="27"
        height="27"
      />
      <path
        style={effectsStyle}
        d="M184.6,54.4c0,15.6-12.7,28.3-28.3,28.3S128,70.1,128,54.4c0-15.6,12.7-28.3,28.3-28.3h0
	C171.9,26.1,184.6,38.8,184.6,54.4"
      />
      <path
        style={bookStyle}
        d="M7.4,100.7v1.4c0,16.4,13.6,21.4,41,15.9c18.7-3.7,36.2-6,39.6,8.3c3.5-14.3,20.8-12,39.6-8.3
	c27.4,5.5,41,0.5,41-15.9v-1.4"
      />
      <path
        style={bookStyle}
        d="M154.4,18.7c0,0-11.2,0.3-33.8-4.2c-15.5-3-29.8-4.9-32.6,6.8c-2.8-11.8-17.3-9.9-32.6-6.8
	c-22.6,4.6-33.8,4.2-33.8,4.2v84.6c0,0,11.2,2.5,33.8-2c15.4-3,29.8-4.9,32.6,6.8c2.9-11.8,17.1-9.9,32.6-6.8
	c22.6,4.5,33.8,2,33.8,2V18.7z"
      />
      <line style={bookStyle} x1="88.1" y1="21.3" x2="88.1" y2="108.1" />
    </svg>
  )
}

export default Ensico

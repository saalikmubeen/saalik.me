import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'

import styles from './entry.module.css'

function formateDate(date: Date) {
  var strArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  var d = date.getDate()
  var m = strArray[date.getMonth()]
  var minutes =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
  var hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
  var time = hours + ':' + minutes
  return '' + (d <= 9 ? '0' + d : d) + ' ' + m + ', ' + time
}

const Entry = ({
  title,
  description,
  image,
  href,
  position,
  playedAt
}: {
  title: string
  description?: string
  image: string
  href?: string
  position?: string
  playedAt?: string
}) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const d = playedAt ? new Date(playedAt) : null

  const formattedDate = d && formateDate(d)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={cn(styles.link, { [styles.active]: !image })}
      title={`${title} - ${description}`}
    >
      <section
        style={{
          backgroundImage: image
            ? !inView
              ? 'none'
              : `url(${image})`
            : 'none',
          backgroundPosition: position ? position : 'center'
        }}
      >
        <div>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          {description && (
            <p className={cn(styles.description, 'clamp')}>{description}</p>
          )}

          {formattedDate && (
            <>
              <p className={cn(styles.description)}>Last played at:</p>
              <p className={cn(styles.description)}>{formattedDate}</p>
            </>
          )}
        </div>
      </section>
    </a>
  )
}

export default Entry

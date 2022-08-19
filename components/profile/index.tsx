import React from 'react'
import Image from 'next/image'
import Link from '@components/link'
import classes from './profile.module.css'

const Profile = ({ me, playlists }: any) => {
  return (
    <header className={classes.header}>
      <div>
        <Image
          className={classes.headerImg}
          src={me.image}
          width={200}
          height={200}
          alt="Spotify profile Picture"
        />
        <div className={classes.details}>
          <Link href={me.url}>
            <h1>{me.name}</h1>
          </Link>
          <div>
            <span>{me.followers} Followers</span>
            {playlists && <span>{playlists} Playlists</span>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Profile

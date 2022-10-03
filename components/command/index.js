import {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'
import useDelayedRender from 'use-delayed-render'
import { DialogContent, DialogOverlay } from '@reach/dialog'

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  usePages
} from 'cmdk'

import {
  ArrowLeft,
  ArrowRight,
  Command as CommandIcon,
  GitHub,
  Home,
  LinkedIn,
  Menu,
  Music,
  Pencil,
  Search,
  Sparkles,
  Travel,
  Moon,
  Heart,
  Sun,
  Spotify,
  Quote
} from '@components/icons'
import styles from './command.module.css'
import headerStyles from '@components/header/header.module.css'
import { useTheme } from 'next-themes'
import tinykeys from '@lib/tinykeys'
import postMeta from '@data/blog.json'

const CommandData = createContext({})
const useCommandData = () => useContext(CommandData)

const CommandMenu = memo(() => {
  const listRef = useRef()
  const commandRef = useRef()
  const router = useRouter()
  const commandProps = useCommand({
    label: 'Site Navigation'
  })
  const [pages, setPages] = usePages(commandProps, ThemeItems)
  const [open, setOpen] = useState(false)
  const { search, list } = commandProps

  const { mounted, rendered } = useDelayedRender(open, {
    enterDelay: -1,
    exitDelay: 200
  })

  // Can't do this inside of useCommand because it relies on useDelayedRender
  useEffect(() => {
    if (!mounted) {
      setPages([DefaultItems])
    }
  }, [mounted, setPages])

  const Items = pages[pages.length - 1]

  const keymap = useMemo(() => {
    return {
      t: () => {
        setPages([ThemeItems])
        setOpen(true)
      },
      // Blog
      b: () => router.push('/blog'),
      // Navigation
      h: () => router.push('/'),
      c: () => router.push('/contacts'),
      // Collections
      /* r: () => router.push('/reading'),
      d: () => router.push('/design'),
      p: () => router.push('/projects'),
      q: () => router.push('/quotes'),*/
      w: () => router.push('/world'),
      m: () => router.push('/music'),
      i: () => router.push('/ideas'),
      a: () => router.push('/about'),
      o: () => router.push('/pictures/hands'),
      y: () => router.push('/pictures/melancholy'),
      e: () => router.push('/pictures/emotive'),
      k: () => router.push('/pictures/hopeless-romantics'),
      // Backspace
      backspace: () => router.back()
    }
  }, [router, setPages])

  // Register the keybinds globally
  useEffect(() => {
    const unsubs = [
      tinykeys(window, keymap, { ignoreFocus: true }),
      tinykeys(window, { '$mod+k': () => setOpen((o) => !o) })
    ]
    return () => {
      unsubs.forEach((unsub) => unsub())
    }
  }, [keymap])

  useEffect(() => {
    // When items change, bounce the UI
    if (commandRef.current) {
      // Bounce the UI slightly
      commandRef.current.style.transform = 'scale(0.99)'
      commandRef.current.style.transition = 'transform 0.1s ease'
      // Not exactly safe, but should be OK
      setTimeout(() => {
        commandRef.current.style.transform = ''
      }, 100)
    }
  }, [pages])

  const heightRef = useRef()

  useEffect(() => {
    if (!listRef.current || !heightRef.current) return

    const height = Math.min(listRef.current.offsetHeight + 1, 450)
    heightRef.current.style.height = height + 'px'
  })

  return (
    <>
      <button
        className={headerStyles.command}
        title="K"
        onClick={() => setOpen(true)}
      >
        <CommandIcon />
      </button>

      <DialogOverlay
        isOpen={mounted}
        className={cn(styles.screen, {
          [styles.show]: rendered
        })}
        onDismiss={() => setOpen(false)}
      >
        <DialogContent
          className={styles['dialog-content']}
          aria-label="Site Navigation"
        >
          <Command
            {...commandProps}
            ref={commandRef}
            className={cn(styles.command, {
              [styles.show]: rendered
            })}
          >
            <div className={styles.top}>
              <CommandInput
                placeholder={
                  Items === ThemeItems
                    ? 'Select a theme...'
                    : Items === BlogItems
                    ? 'Search for posts...'
                    : 'Type a command or search...'
                }
              />
            </div>

            <div
              ref={heightRef}
              className={cn(styles.container, {
                [styles.empty]: list.current.length === 0
              })}
            >
              <CommandList ref={listRef}>
                <CommandData.Provider
                  value={{ pages, search, open, setPages, keymap, setOpen }}
                >
                  <Items />
                </CommandData.Provider>
              </CommandList>
            </div>
          </Command>
        </DialogContent>
      </DialogOverlay>
    </>
  )
})

CommandMenu.displayName = 'CommandMenu'
export default CommandMenu

const ThemeItems = () => {
  const { theme: activeTheme, themes, setTheme } = useTheme()
  const { setOpen } = useCommandData()

  return themes.map((theme) => {
    if (theme === activeTheme) return null
    return (
      <Item
        value={theme}
        key={`theme-${theme}`}
        icon={theme === 'system' ? null : theme === 'dark' ? <Moon /> : <Sun />}
        callback={() => {
          setTheme(theme)
          setOpen(false)
        }}
      >
        {theme}
      </Item>
    )
  })
}

const BlogItems = () => {
  const router = useRouter()

  return postMeta.map((post, i) => {
    return (
      <Item
        key={`blog-item-${post.title}-${i}`}
        value={post.title}
        callback={() => router.push('/blog/[slug]', `/blog/${post.slug}`)}
      />
    )
  })
}

const Label = ({ title }) => {
  return (
    <div className={styles.label} aria-hidden>
      {title}
    </div>
  )
}

const Group = ({ children, title }) => {
  return (
    <CommandGroup heading={<Label title={title} />} className={styles.group}>
      {children}
    </CommandGroup>
  )
}

const DefaultItems = () => {
  // const router = useRouter()
  const { setPages, pages } = useCommandData()

  return (
    <>
      <Group title="Navigation">
        <Item value="Home" icon={<Home />} keybind="h" />
        <Item value="Menu" icon={<Menu />} keybind="ctrl+k" />
        <Item value="Go Back" icon={<ArrowLeft />} keybind="backspace" />
        <Item value="Contacts" icon={<ArrowRight />} keybind="c" />
        <Item
          value="Themes"
          icon={<Sparkles />}
          keybind="t"
          closeOnCallback={false}
        />
      </Group>

      <Group title="Pages">
        <Item value="Blog" icon={<Pencil />} keybind="b" />{' '}
        <Item
          value="Search blog..."
          icon={<Search />}
          closeOnCallback={false}
          callback={() => setPages([...pages, BlogItems])}
        />
        {/* <Item value="Reading" icon={<Book />} keybind="r" />
        <Item value="Design" icon={<Design />} keybind="d" />
        <Item value="Projects" icon={<Document />} keybind="p" />
        <Item value="Quotes" icon={<Quote />} keybind="q" /> */}
        <Item value="World" icon={<Travel viewBox="0 0 44 44" />} keybind="w" />
        <Item value="Music" icon={<Music />} keybind="m" />
        <Item value="About" icon={<Quote />} keybind="a" />
        {/* <Item value="Ideas" icon={<Lightbulb />} keybind="i" /> */}
      </Group>

      <Group title="Social">
        <Item
          value="GitHub"
          icon={<GitHub />}
          callback={() =>
            window.open('https://github.com/saalikmubeen', '_blank')
          }
        />
        <Item
          value="LinkedIn"
          icon={<LinkedIn />}
          callback={() =>
            window.open('https://linkedin.com/in/saalikmubeen', '_blank')
          }
        />
        <Item
          value="Spotify"
          icon={<Spotify color="gray" className={styles.spotify} />}
          callback={() =>
            window.open(
              'https://open.spotify.com/user/thjaa3yh1ootw5bul3q01kjk2',
              '_blank'
            )
          }
        />
      </Group>

      <Group title="Source">
        <Item
          value="view source code"
          icon={<GitHub />}
          callback={() =>
            window.open('https://github.com/saalikmubeen/saalik.me', '_blank')
          }
        />
      </Group>

      <Group title="Pictures">
        <Item value="Hand obsession" icon={<Heart />} keybind="o" />
        <Item value="Melancholy" icon={<Moon />} keybind="y" />
        <Item value="Emotive" icon={<Moon />} keybind="e" />
        <Item value="Hopeless Romantics" icon={<Sun />} keybind="k" />
      </Group>
    </>
  )
}

const Item = ({
  icon,
  children,
  callback,
  closeOnCallback = true,
  keybind,
  ...props
}) => {
  const { keymap, setOpen } = useCommandData()

  const cb = () => {
    if (callback) {
      callback()
    } else {
      keymap[keybind]?.()
    }

    if (closeOnCallback) {
      setOpen(false)
    }
  }

  return (
    <CommandItem {...props} callback={cb}>
      <div>
        <div className={styles.icon}>{icon}</div>
        {children || props.value}
      </div>

      {keybind && (
        <span className={styles.keybind}>
          {keybind.includes(' ') ? (
            keybind.split(' ').map((key, i) => {
              return <kbd key={`keybind-${key}-${i}`}>{key}</kbd>
            })
          ) : (
            <kbd>{keybind}</kbd>
          )}
        </span>
      )}
    </CommandItem>
  )
}

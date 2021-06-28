import { Injectable } from '@angular/core'
import { WebAuthStore } from '@kin-nxpm-stack/web/auth/data-access'
import { Role } from '@kin-nxpm-stack/web/core/data-access'
import { WebWalletDataAccessStore } from '@kin-nxpm-stack/web/wallet/data-access'
import { ComponentStore } from '@ngrx/component-store'

export interface WebLayoutLink {
  label: string
  route: string
  role?: Role
}

export interface WebLayoutState {
  theme: 'dark' | 'light'
  logo: string
  footerHtml: string
  total?: number
  links: WebLayoutLink[]
  profileLinks: WebLayoutLink[]
}

@Injectable({ providedIn: 'root' })
export class WebLayoutStore extends ComponentStore<WebLayoutState> {
  constructor(private readonly authStore: WebAuthStore) {
    super({
      total: 0,
      theme: 'dark',
      logo: '/assets/images/logo.png',
      footerHtml: `Copyright &copy; ${new Date().getFullYear()}`,
      links: [
        { label: 'Dashboard', route: '/dashboard' },
        { label: 'Wallets', route: 'wallets' },
        { label: 'Admin', route: '/admin', role: Role.Admin },
      ],
      profileLinks: [
        { label: 'Dashboard', route: '/dashboard' },
        { label: 'Your Account', route: '/account' },
        { label: 'Admin', route: '/admin', role: Role.Admin },
        { label: 'About', route: '/about' },
        { label: 'Logout', route: '/logout' },
      ],
    })
  }

  readonly updateTotal = this.updater<number>((state, total) => ({ ...state, total }))
  readonly user$ = this.authStore.user$
  readonly links$ = this.select(this.authStore.user$, this.state$, (user, state) => ({
    main: state.links.filter((l) => (l.role ? l.role === user.role : l)),
    profile: state.profileLinks.filter((l) => (l.role ? l.role === user.role : l)),
  }))

  readonly total$ = this.select((s) => s.total)
  readonly layout$ = this.select(({ logo, footerHtml, theme }) => ({
    logo,
    footerHtml,
    theme,
  }))
  readonly vm$ = this.select(this.user$, this.total$, this.links$, this.layout$, (user, total, links, layout) => ({
    user,
    total,
    links,
    layout,
  }))
}

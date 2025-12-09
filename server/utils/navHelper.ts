interface NavItem {
  text: string
  href: string
  active?: boolean
}

export interface NavSection {
  heading: { text: string }
  items: NavItem[]
}

export const activateMojNav = (navSections: NavSection[], currentPath: string): NavSection[] => {
  return navSections.map((section: NavSection) => {
    const processedItems = section.items.map((item: NavItem) => {
      if (item.href === currentPath) {
        return { ...item, active: true }
      }
      return item
    })

    return { ...section, items: processedItems }
  })
}

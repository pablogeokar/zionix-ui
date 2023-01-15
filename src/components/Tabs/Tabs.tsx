import { ReactElement, ReactNode, useState } from 'react'
import Icon from '../Icon'
import { IconsType } from '../Icon/IconsType';
import css from './Tabs.module.scss'

interface TabItemProps {
  icon?: IconsType[keyof IconsType]
  label: string;
  component: ReactElement | ReactNode | JSX.Element;
}

interface TabsProps {
  minHeight?: string;
  tabs: TabItemProps[]
}

export default function Tabs({ minHeight = '200px', tabs }: TabsProps) {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [markPosition, setMarkPosition] = useState({ left: '0', width: '50px' })

  const activeTab = (index: number, event: any) => {

    if (activeTabIndex !== index) {

      // Update left and width of new mark position
      setMarkPosition({
        left: event.target.offsetLeft + 'px',
        width: event.target.offsetWidth + 'px'
      })

      setActiveTabIndex(index);
    }
  }

  return (
    <div className={css.wrapper} style={{ minHeight: minHeight }}>
      <div className={css['tabs']}>
        <div id="tab-header" className={css['tab-header']}>
          {
            tabs.map((tab, index) => (
              <div
                key={tab.label}
                className={`${index === activeTabIndex ? css['tab-active'] : ''}`}
                onClick={(event) => activeTab(index, event)}
              >
                {tab.icon && <Icon iconName={tab.icon} className={css.icon} />}
                {tab.label}
              </div>
            ))
          }
        </div>
        <div id='tab-indicator' className={css['tab-indicator']} style={{ left: markPosition.left, width: markPosition.width }} />
        <div id="tab-body" className={css['tab-body']}>
          {
            tabs.map((tab, index) => (
              <div key={tab.label} className={index === activeTabIndex ? css['tab-active'] : ''}>
                {tab.component}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
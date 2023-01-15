import { ReactElement, useState } from 'react'
import Icon from '../Icon'
import { IconsType } from '../Icon/IconsType';
import css from './Tabs.module.scss'

interface TabItemProps {
  icon?: IconsType[keyof IconsType]
  label: string;
  component: ReactElement;
}

interface TabsProps {
  minHeight?: string;
  tabs: TabItemProps[]
}

export default function Tabs({ minHeight = '200px', tabs }: TabsProps) {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = (index: number, event: any) => {

    if (activeTabIndex !== index) {

      const mark = document.querySelector('#tab-indicator') as HTMLElement;
      const tabs = document.querySelectorAll('#tab-body div')

      tabs.forEach(i => {
        i.classList.remove(css['tab-active'])
      })

      mark.style.left = event.target.offsetLeft + 'px';
      mark.style.width = event.target.offsetWidth + 'px';

      tabs[index].classList.add(css['tab-active']);

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
        <div id='tab-indicator' className={css['tab-indicator']} />
        <div id="tab-body" className={css['tab-body']}>
          {
            tabs.map((tab, index) => (
              <div key={tab.label} className={index === 0 ? css['tab-active'] : ''}>
                {tab.component}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
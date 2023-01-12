import { ReactElement, useState } from 'react';
import Icon from '../Icon';
import { IconsType } from '../Icon/IconsType';
import Text from '../Text';
import styles from './Tabs.module.scss'

interface TabItemProps extends IconsType {
  label: string;
  component: ReactElement;
}

interface TabsProps {
  title?: string;
  tabs: TabItemProps[]
}

export default function Tabs({ title, tabs }: TabsProps) {

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTab = (index: number) => {
    setActiveTabIndex(index)
  }

  return (

    <div>
      {title && <Text level={2}>{title}</Text>}
      <div className={styles['tabs-body']}>
        {
          tabs === undefined ?
            <Text>No content</Text>
            :
            <div>
              <div className={styles.tabs}>
                {
                  tabs.map((tab, index) => (
                    <div
                      key={index}
                      className={`${styles['tab']} ${index === activeTabIndex ? styles['active-tab'] : styles['inactive-tab']}`}
                      onClick={() => activeTab(index)}
                    >
                      {tab.iconName && <Icon iconName={tab.iconName} />}
                      <Text>{tab.label}</Text>
                    </div>
                  ))
                }
              </div>
              <div className={styles['tabs-content']}>
                {tabs[activeTabIndex].component}
              </div>
            </div>
        }
      </div>
    </div>

  )
}
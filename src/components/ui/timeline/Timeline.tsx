import { TimelineItem, TTimelineItemProps } from './TimelineItem'

export type TTimelinePropsItem = Omit<
  TTimelineItemProps,
  'isActive' | 'isActiveBullet' | 'bulletSize' | 'lineSize'
> & {
  bulletSize?: number
}

export type TTimelineProps = {
  items: TTimelinePropsItem[]
  activeItem: number
  bulletSize?: number
  lineSize?: number
}

/*
  No bullet or line is active when activeItem is -1
  First bullet is active only if activeItem is 0 or more
  First line is active only if activeItem is 1 or more
*/

export const Timeline = ({
  items,
  activeItem,
  bulletSize = 16,
  lineSize = 2,
}: TTimelineProps) => {
  return (
    <ul
      style={{
        paddingLeft: bulletSize / 2,
      }}
    >
      {items.map((item, index) => {
        return (
          <TimelineItem
            key={index}
            title={item.title}
            bullet={item.bullet}
            isLast={index === items.length - 1}
            isActive={activeItem === -1 ? false : activeItem >= index + 1}
            isActiveBullet={activeItem === -1 ? false : activeItem >= index}
            bulletSize={bulletSize}
            lineSize={lineSize}
          >
            {item.children}
          </TimelineItem>
        )
      })}
    </ul>
  )
}

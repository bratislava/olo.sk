import React from 'react'

import Accordion from '@/src/components/common/Accordion/Accordion'
import WasteIcon from '@/src/components/common/Accordion/WasteIcon'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

const AccordionPlaceholder = () => {
  const data = [
    {
      label: 'Paper',
      variant: 'paper',
      hasBottomBorder: true,
      children: (
        <Typography variant="p-default">
          Ut eget malesuada nisl. Donec gravida, risus in maximus tincidunt, augue elit maximus
          ante, at posuere arcu est in metus. Sed maximus risus nulla, quis blandit nulla efficitur
          in. Aenean porttitor lacus sed gravida volutpat. Nunc feugiat quam id mi pulvinar
          vestibulum. Integer eget porttitor est. Duis at enim sit amet tellus elementum vehicula
          nec quis enim. Curabitur ut molestie ex. Mauris aliquet vulputate lacus, sed mollis urna
          luctus in. Phasellus magna neque, aliquet nec odio at, accumsan ultricies justo.
          Suspendisse sit amet orci purus.
        </Typography>
      ),
    },
    {
      label: 'Plastic',
      variant: 'plastic',
      hasBottomBorder: true,
      children: (
        <Typography variant="p-default">
          Ut eget malesuada nisl. Donec gravida, risus in maximus tincidunt, augue elit maximus
          ante, at posuere arcu est in metus. Sed maximus risus nulla, quis blandit nulla efficitur
          in. Aenean porttitor lacus sed gravida volutpat. Nunc feugiat quam id mi pulvinar
          vestibulum. Integer eget porttitor est. Duis at enim sit amet tellus elementum vehicula
          nec quis enim. Curabitur ut molestie ex. Mauris aliquet vulputate lacus, sed mollis urna
          luctus in. Phasellus magna neque, aliquet nec odio at, accumsan ultricies justo.
          Suspendisse sit amet orci purus.
        </Typography>
      ),
    },
    {
      label: 'Glass',
      variant: 'glass',
      hasBottomBorder: true,
      children: (
        <Typography variant="p-default">
          Ut eget malesuada nisl. Donec gravida, risus in maximus tincidunt, augue elit maximus
          ante, at posuere arcu est in metus. Sed maximus risus nulla, quis blandit nulla efficitur
          in. Aenean porttitor lacus sed gravida volutpat. Nunc feugiat quam id mi pulvinar
          vestibulum. Integer eget porttitor est. Duis at enim sit amet tellus elementum vehicula
          nec quis enim. Curabitur ut molestie ex. Mauris aliquet vulputate lacus, sed mollis urna
          luctus in. Phasellus magna neque, aliquet nec odio at, accumsan ultricies justo.
          Suspendisse sit amet orci purus.
        </Typography>
      ),
    },
  ] as const

  return (
    <div className="flex flex-col gap-6">
      <div
        className={cn(
          'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary py-2 lg:px-5',
        )}
      >
        {data.map((accordion, index) => {
          return (
            <>
              <div className="px-4 lg:px-5">{index > 0 ? <SidebarDivider /> : null}</div>
              <Accordion
                hasBottomBorder
                title={accordion.label}
                // icon={<WasteIcon variant={accordion.variant} />}
              >
                {accordion.children}
              </Accordion>
            </>
          )
        })}
      </div>
      <div
        className={cn(
          'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary py-2 lg:px-5',
        )}
      >
        {data.map((accordion, index) => {
          return (
            <>
              <div className="px-4 lg:px-5">{index > 0 ? <SidebarDivider /> : null}</div>
              <Accordion
                hasBottomBorder
                title={accordion.label}
                icon={<WasteIcon variant={accordion.variant} />}
              >
                {accordion.children}
              </Accordion>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default AccordionPlaceholder

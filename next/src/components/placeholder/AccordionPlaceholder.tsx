import React from 'react'

import AccordionDefault from '@/src/components/common/Accordion/AccordionDefault'
import Icon from '@/src/components/common/Icon/Icon'
import SidebarDivider from '@/src/components/common/Sidebar/SidebarDivider'
import Typography from '@/src/components/common/Typography/Typography'
import cn from '@/src/utils/cn'

const WasteIconSquare = ({ variant }: { variant: 'paper' | 'plastic' | 'glass' }) => {
  return (
    <div
      className={cn('flex h-[3rem] w-[3rem] rounded-2xl p-3 text-white', {
        'bg-waste-paper': variant === 'paper',
        'bg-waste-plastic': variant === 'plastic',
        'bg-waste-glass': variant === 'glass',
      })}
    >
      <Icon name="kos" />
    </div>
  )
}

const AccordionPlaceholder = () => {
  const data = [
    {
      label: 'Paper',
      variant: 'paper',
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
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg border border-border-default bg-background-primary px-4 lg:px-5',
      )}
    >
      {data.map((accordion, index) => {
        return (
          <>
            {index > 0 ? <SidebarDivider className="-mx-4 lg:-mx-5" /> : null}
            <AccordionDefault
              title={accordion.label}
              containerClassname="py-8" // TODO this should be applied to `summary` to have the whole summary clickable
              StartComponent={<WasteIconSquare variant={accordion.variant} />}
            >
              {accordion.children}
            </AccordionDefault>
          </>
        )
      })}
    </div>
  )
}

export default AccordionPlaceholder

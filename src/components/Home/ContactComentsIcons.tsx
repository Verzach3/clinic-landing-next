import { Text, ThemeIcon, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactComent.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactComentsIcons({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <ThemeIcon size={40} radius="md" className={classes.icon}>
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </ThemeIcon>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'info@wellfitclinic.com', icon: IconAt },
  { title: 'Phone', description: '+57 310 768 6345', icon: IconPhone },
  { title: 'Address', description: 'Cr 8 #16s-10', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 6 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactComentsIcons key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
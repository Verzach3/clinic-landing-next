import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition, rem } from '@mantine/core';

function ManageScroll () {
    
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
 
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
             Volver Arriba
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ManageScroll;
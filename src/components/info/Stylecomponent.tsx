'use client';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Grid, GridCol, Title, Text, SimpleGrid, Button } from '@mantine/core';
import Image from 'next/image';
import classes from '@/app/info/[gender]/[[...postid]]/page.module.css';
import ModalInfoButton from './ModalInfoButton';

function Stylecomponent({ children }: any) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const gridCols = isMobile ? 1 : 2;

  const codeLines = children.trim().split('\n');
  if (codeLines.length < 4) {
    console.error('Se esperan al menos una línea dentro del bloque `code`');
    return null;
  }

  const componentName = codeLines[0].trim();
  const sectionTitle = codeLines[1].trim();
  const imagePath = codeLines[2].trim();
  const description = codeLines.slice(3).join('\n');

  let layout;

  switch (componentName) {
    case 'CenterComponent':
      layout = (
        <Grid gutter={20} className="customGrid">
          <GridCol span={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontWeight: 'bold',
              }}
            >
              <Image
                src={`https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/${imagePath}`}
                alt="Component Image"
                width={600}
                height={500}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                unoptimized
              />
            </div>
          </GridCol>
          <GridCol span={12} className="customGridCol">
            <div className="subGrid">
              <Title order={2} fw={750} style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {sectionTitle}
              </Title>
              <Text className={classes.p} style={{ marginTop: '10px', color: '#555', textWrap: 'wrap', textAlign: 'justify' }}>
                {description}
              </Text>
            </div>
          </GridCol>
        </Grid>
      );
      break;

    case 'LeftComponent':
      layout = (
        <SimpleGrid className="customGridCol" cols={gridCols}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontWeight: 'bold',
            }}
          >
            <Image
              src={`https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/${imagePath}`}
              alt="Component Image"
              width={450}
              height={300}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
              unoptimized
            />
          </div>
          <div className="subGrid">
            <Title order={2} fw={750} style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              {sectionTitle}
            </Title>
            <Text className={classes.p} style={{ marginTop: '10px', color: '#555', textWrap: 'wrap', textAlign: 'justify' }}>
              {description}
            </Text>
          </div>
        </SimpleGrid>
      );
      break;

    case 'RightComponent':
      layout = (
        <SimpleGrid className="customGridCol" cols={gridCols}>
          <div className="subGrid">
            <Title order={2} fw={750} style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
              {sectionTitle}
            </Title>
            <Text className={classes.p} style={{ marginTop: '10px', color: '#555', textWrap: 'wrap', textAlign: 'justify' }}>
              {description}
            </Text>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontWeight: 'bold',
            }}
          >
            <Image
              src={`https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/${imagePath}`}
              alt="Component Image"
              width={400}
              height={300}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
              unoptimized
            />
          </div>
        </SimpleGrid>
      );
      break;

    case 'BotonContact':
    case 'BotonTest':
      layout = (
        <div className={classes.containerButton}>
          <ModalInfoButton />
        </div>
      );
      break;

    default:
      console.error('Nombre de componente desconocido en el bloque `code`');
      return null;
  }

  return <>{layout}</>;
}

export default Stylecomponent;

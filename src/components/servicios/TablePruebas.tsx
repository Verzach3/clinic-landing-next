'use client';
import React, { useState } from 'react';
import {
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  rem,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './TablePruebas.module.css';


interface RowData {
  exam: string;
  category: string;
  purpose: string;
}

const data: RowData[] = [
    { 
      exam: "T.S.H. (TIROTROPINA) Ultrasensible", 
      category: "Función Tiroidea", 
      purpose: "Mide el nivel de la hormona estimulante de la tiroides (TSH) en la sangre."
    },
    { 
      exam: "T4 LIBRE (TIROXINA LIBRE) Ultrasensible", 
      category: "Función Tiroidea", 
      purpose: "Mide el nivel de tiroxina libre (T4) en la sangre."
    },
    { 
      exam: "T3 LIBRE (TRIYODOTIRONINA LIBRE) Ultrasensible", 
      category: "Función Tiroidea", 
      purpose: "Mide el nivel de triyodotironina libre (T3) en la sangre."
    },
    { 
      exam: "INSULINA (CADA MUESTRA)", 
      category: "Función Endocrina", 
      purpose: "Mide el nivel de insulina en cada muestra de sangre."
    },
    { 
      exam: "INSULINA LIBRE", 
      category: "Función Endocrina", 
      purpose: "Mide el nivel de insulina libre en la sangre."
    },

    { 
        exam: "INSULINA PRE Y POST CON CARGA", 
        category: "Función Endocrina", 
        purpose: "Mide los niveles de insulina antes y después de una carga de glucosa. Evalua la respuesta del cuerpo al desafío de glucosa y detectar resistencia a la insulina o insulina alterada"
      },
      { 
        exam: "INSULINA PRE Y POST PRANDIAL", 
        category: "Función Endocrina", 
        purpose: "Mide los niveles de insulina antes y después de una comida. Este examen ayuda a evaluar la respuesta de insulina del cuerpo a la ingesta de alimentos"
      },
      { 
        exam: "CORTISOL AM", 
        category: "Función Adrenal", 
        purpose: "Mide el nivel de cortisol en la sangre por la mañana. El cortisol es una hormona producida por las glándulas suprarrenales que ayuda a regular la respuesta al estrés, el metabolismo y la función inmunológica."
      },
      { 
        exam: "CORTISOL AM - PM (2 MUESTRAS)", 
        category: "Función Adrenal", 
        purpose: "Mide los niveles de cortisol por la mañana y por la tarde/noche (2 muestras). Este examen ayuda a evaluar la variación diurna de la secreción de cortisol y puede detectar anomalías en la producción de cortisol."
      },
      { 
        exam: "CORTISOL EN ORINA 24 HORAS", 
        category: "Función Endocrina", 
        purpose: "Mide la cantidad de cortisol excretado en la orina durante un período de 24 horas. Ayuda a diagnosticar trastornos como el síndrome de Cushing o la insuficiencia suprarrenal."
      },

      { 
        exam: "GLOBULINA TRANSPORTADORA DE LA HORMONA SEXUAL HUMANA", 
        category: "Función Adrenal", 
        purpose: "Mide el nivel de globulina transportadora de hormonas sexuales (SHBG) en la sangre. La SHBG es una proteína que se une y transporta hormonas sexuales, como la testosterona y el estradiol"
      },
      { 
        exam: "TESTOSTERONA LIBRE", 
        category: "Función Endocrina", 
        purpose: "Mide el nivel de testosterona libre en la sangre"
      },
      { 
        exam: "TESTOSTERONA TOTAL", 
        category: "Función Endocrina", 
        purpose: "Mide el nivel total de testosterona en la sangre, incluyendo tanto la testosterona libre como la unida a proteínas."
      },

      { 
        exam: "PERFIL COMPLETO DE LÍPIDOS", 
        category: "Perfil de Lípidos", 
        purpose: "Un panel completo que incluye mediciones de colesterol total, colesterol de lipoproteínas de alta densidad (HDL), colesterol de lipoproteínas de baja densidad (LDL) y triglicéridos"
      },
      { 
        exam: "HORMONA LUTEINIZANTE (LH)", 
        category: "Función Reproductiva", 
        purpose: "Mide el nivel de hormona luteinizante (LH) en la sangre. La LH es producida por la glándula pituitaria. "
      },


      { 
        exam: "HORMONA ESTIMULANTE DEL FOLÍCULO (FSH)", 
        category: "Función Reproductiva", 
        purpose: "Mide el nivel de hormona folículo-estimulante (FSH) en la sangre. La FSH es producida por la glándula pituitaria y estimula el crecimiento y desarrollo de los folículos en los ovarios (en mujeres) y la producción de espermatozoides en los testículos (en hombres)."
      },
      { 
        exam: "ESTRADIOL (E2)", 
        category: "Función Reproductiva", 
        purpose: "Mide el nivel de estradiol (E2) en la sangre. El estradiol es una forma de estrógeno, una hormona sexual."
      },

      { 
        exam: "ESTRADIOL PM", 
        category: "Función Reproductiva", 
        purpose: "Mide el nivel de estradiol en la sangre por la tarde/noche (post meridiem). Ayuda a eva la función ovárica"
      },


      { 
        exam: "PROGESTERONA", 
        category: "Función Reproductiva", 
        purpose: "Mide el nivel de progesterona en la sangre. La progesterona es una hormona sexual femenina."
      },


      { 
        exam: "HEMOGLOBINA GLICOSILADA)", 
        category: "Manejo de la Diabetes", 
        purpose: "Mide el porcentaje de hemoglobina glucosilada (HbA1c) en la sangre. La HbA1c refleja el nivel promedio de azúcar en la sangre."
      },


      { 
        exam: "ESTRADIOL (E2)", 
        category: "Función Reproductiva", 
        purpose: "Mide el nivel de estradiol (E2) en la sangre. El estradiol es una forma de estrógeno, una hormona sexual."
      },



  ];
  

  function Th({ children, reversed, sorted, onSort }: { children: React.ReactNode, reversed: boolean, sorted: boolean, onSort: () => void }) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
      <Table.Th className={classes.th}>
        <UnstyledButton onClick={onSort} className={classes.control}>
          <Group >
            <Text fw={500}>{children}</Text>
            <Center className={classes.icon}>
              <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </Center>
          </Group>
        </UnstyledButton>
      </Table.Th>
    );
  }
  
  function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      Object.values(item).some((value) => value.toString().toLowerCase().includes(query))
    );
  }
  
  function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
  ) {
    const { sortBy } = payload;
    if (!sortBy) {
      return filterData(data, payload.search);
    }
    return filterData(
      [...data].sort((a, b) => {
        const valueA = a[sortBy].toString(),
          valueB = b[sortBy].toString();
        return payload.reversed ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
      }),
      payload.search
    );
  }
  
  export function TablePruebas() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);
  
    const setSorting = (field: keyof RowData) => {
      const reversed = field === sortBy ? !reverseSortDirection : false;
      setReverseSortDirection(reversed);
      setSortBy(field);
      setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setSearch(value);
      setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };
  
    const rows = sortedData.map((row) => (
      <Table.Tr key={row.exam}>
        <Table.Td>{row.exam}</Table.Td>
        <Table.Td>{row.category}</Table.Td>
        <Table.Td>{row.purpose}</Table.Td>
      </Table.Tr>
    ));
  
    return (
      <div className={classes.tableContainer}>
        <TextInput
          placeholder="Buscar por cualquier campo"
          mb="md"
      
          value={search}
          onChange={handleSearchChange}
          className={classes.searchInput}
        />
        <ScrollArea>
          <Table horizontalSpacing="md" verticalSpacing="xs" layout="fixed">
            <Table.Thead>
              <Table.Tr>
                <Th sorted={sortBy === 'exam'} reversed={reverseSortDirection} onSort={() => setSorting('exam')}>Examen</Th>
                <Th sorted={sortBy === 'category'} reversed={reverseSortDirection} onSort={() => setSorting('category')}>Categoría</Th>
                <Th sorted={sortBy === 'purpose'} reversed={reverseSortDirection} onSort={() => setSorting('purpose')}>Para Qué Sirve</Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={3}>
                    <Text fw={500} ta="center">
                      No se encontró nada
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </div>
    );
  }
  
  export default TablePruebas;
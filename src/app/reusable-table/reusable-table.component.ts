import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent {
  title = 'archkey-table';
  columns:any[] = [];
  ELEMENT_DATA = [
    {
      id: 1,
      name: 'Hydrogen',
      description: 'Element 1',
      symbol: 'H',
      category: 'Nonmetals',
      atomicNumber: 1,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Hydrogen is the first element.' },
        { title: 'Detail 2', description: 'It is the lightest element.' },
        { title: 'Detail 3', description: 'Hydrogen has the atomic number 1.' },
        { title: 'Detail 4', description: 'It is the most abundant element in the universe.' },
        { title: 'Detail 5', description: 'Hydrogen is a key component in stars and fusion reactions.' },
        { title: 'Detail 6', description: 'It is the primary fuel for stars.' },
        { title: 'Detail 7', description: 'Hydrogen is used in hydrogen fuel cells.' },
        { title: 'Detail 8', description: 'It has a boiling point of -252.87°C.' },
      ],
      dateDiscovered: '1766',
      isRadioactive: false,
      density: 0.00008988,
      
    },
    {
      id: 2,
      name: 'Helium',
      description: 'Element 2',
      symbol: 'He',
      category: 'Noble gases',
      atomicNumber: 2,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Helium is the second element.' },
        { title: 'Detail 2', description: 'It is a noble gas.' },
        { title: 'Detail 3', description: 'Helium has the atomic number 2.' },
        { title: 'Detail 4', description: 'It is used in balloons and as a cooling agent in MRI machines.' },
        { title: 'Detail 5', description: 'Helium was discovered in the Sun before being found on Earth.' },
        { title: 'Detail 6', description: 'It has the lowest boiling point of any element.' },
        { title: 'Detail 7', description: 'It is non-toxic and colorless.' },
        { title: 'Detail 8', description: 'Helium is used in cryogenics and quantum computing.' },
      ],
      dateDiscovered: '1895',
      isRadioactive: false,
      density: 0.0001786,
    },
    {
      id: 3,
      name: 'Lithium',
      description: 'Element 3',
      symbol: 'Li',
      category: 'Alkali metals',
      atomicNumber: 3,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Lithium is the third element.' },
        { title: 'Detail 2', description: 'It is used in rechargeable batteries.' },
        { title: 'Detail 3', description: 'Lithium is the lightest metal.' },
        { title: 'Detail 4', description: 'It is highly reactive and flammable.' },
        { title: 'Detail 5', description: 'Lithium is found in trace amounts in seawater.' },
        { title: 'Detail 6', description: 'Lithium is used to treat bipolar disorder.' },
        { title: 'Detail 7', description: 'It was discovered in 1817 by Johan August Arfvedson.' },
        { title: 'Detail 8', description: 'Lithium has a density of 0.534 g/cm³.' },
      ],
      dateDiscovered: '1817',
      isRadioactive: false,
      density: 0.534,
    },
    {
      id: 4,
      name: 'Beryllium',
      description: 'Element 4',
      symbol: 'Be',
      category: 'Alkaline earth metals',
      atomicNumber: 4,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Beryllium is the fourth element.' },
        { title: 'Detail 2', description: 'It is a strong, lightweight metal.' },
        { title: 'Detail 3', description: 'Beryllium is used in aerospace and nuclear applications.' },
        { title: 'Detail 4', description: 'It is toxic and should be handled with care.' },
        { title: 'Detail 5', description: 'Beryllium was discovered by Louis-Nicolas Vauquelin in 1798.' },
        { title: 'Detail 6', description: 'It is used in X-ray windows and gyroscopes.' },
        { title: 'Detail 7', description: 'Beryllium has a density of 1.848 g/cm³.' },
        { title: 'Detail 8', description: 'It has an atomic number of 4.' },
      ],
      dateDiscovered: '1798',
      isRadioactive: false,
      density: 1.848,
    },
    {
      id: 5,
      name: 'Boron',
      description: 'Element 5',
      symbol: 'B',
      category: 'Metalloids',
      atomicNumber: 5,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Boron is the fifth element.' },
        { title: 'Detail 2', description: 'It is a metalloid.' },
        { title: 'Detail 3', description: 'Boron is used in glass and ceramics.' },
        { title: 'Detail 4', description: 'It is a good conductor of electricity.' },
        { title: 'Detail 5', description: 'Boron was discovered by Joseph-Louis Gay-Lussac in 1808.' },
        { title: 'Detail 6', description: 'It has an atomic number of 5.' },
        { title: 'Detail 7', description: 'Boron is used in the production of semiconductors.' },
        { title: 'Detail 8', description: 'It has a density of 2.34 g/cm³.' },
      ],
      dateDiscovered: '1808',
      isRadioactive: false,
      density: 2.34,
    },
    {
      id: 6,
      name: 'Carbon',
      description: 'Element 6',
      symbol: 'C',
      category: 'Nonmetals',
      atomicNumber: 6,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Carbon is the sixth element.' },
        { title: 'Detail 2', description: 'It is the basis for life on Earth.' },
        { title: 'Detail 3', description: 'Carbon exists in several forms, including diamond and graphite.' },
        { title: 'Detail 4', description: 'It is a nonmetal and a good conductor of electricity in certain forms.' },
        { title: 'Detail 5', description: 'Carbon has an atomic number of 6.' },
        { title: 'Detail 6', description: 'It is used in fuel, steel production, and in electronics.' },
        { title: 'Detail 7', description: 'Carbon is the fourth most abundant element in the universe.' },
        { title: 'Detail 8', description: 'It has a density of 2.267 g/cm³.' },
      ],
      dateDiscovered: 'Ancient',
      isRadioactive: false,
      density: 2.267,
    },
    {
      id: 7,
      name: 'Nitrogen',
      description: 'Element 7',
      symbol: 'N',
      category: 'Nonmetals',
      atomicNumber: 7,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Nitrogen is the seventh element.' },
        { title: 'Detail 2', description: 'It makes up 78% of Earth\'s atmosphere.' },
        { title: 'Detail 3', description: 'Nitrogen is essential for life, forming amino acids and proteins.' },
        { title: 'Detail 4', description: 'It is colorless, odorless, and inert.' },
        { title: 'Detail 5', description: 'Nitrogen was discovered in 1772 by Daniel Rutherford.' },
        { title: 'Detail 6', description: 'Nitrogen is used in fertilizers and in the food industry.' },
        { title: 'Detail 7', description: 'It has a density of 1.2506 g/L.' },
        { title: 'Detail 8', description: 'Nitrogen has an atomic number of 7.' },
      ],
      dateDiscovered: '1772',
      isRadioactive: false,
      density: 1.2506,
    },
    {
      id: 8,
      name: 'Oxygen',
      description: 'Element 8',
      symbol: 'O',
      category: 'Nonmetals',
      atomicNumber: 8,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Oxygen is the eighth element.' },
        { title: 'Detail 2', description: 'It is essential for respiration in most living organisms.' },
        { title: 'Detail 3', description: 'Oxygen is a highly reactive nonmetal.' },
        { title: 'Detail 4', description: 'It has an atomic number of 8.' },
        { title: 'Detail 5', description: 'Oxygen is used in water treatment and in medical breathing gases.' },
        { title: 'Detail 6', description: 'It forms water and other oxides with many elements.' },
        { title: 'Detail 7', description: 'Oxygen was discovered in 1774 by Joseph Priestley.' },
        { title: 'Detail 8', description: 'It has a density of 1.429 g/L at 0°C.' },
      ],
      dateDiscovered: '1774',
      isRadioactive: false,
      density: 1.429,
    },
    {
      id: 9,
      name: 'Fluorine',
      description: 'Element 9',
      symbol: 'F',
      category: 'Halogens',
      atomicNumber: 9,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Fluorine is the ninth element.' },
        { title: 'Detail 2', description: 'It is the most reactive element in the periodic table.' },
        { title: 'Detail 3', description: 'Fluorine is used in the production of Teflon.' },
        { title: 'Detail 4', description: 'It is used in toothpaste to prevent cavities.' },
        { title: 'Detail 5', description: 'Fluorine was discovered in 1886 by Henri Moissan.' },
        { title: 'Detail 6', description: 'Fluorine reacts with almost all other elements.' },
        { title: 'Detail 7', description: 'It is toxic and should be handled with care.' },
        { title: 'Detail 8', description: 'Fluorine has an atomic number of 9.' },
      ],
      dateDiscovered: '1886',
      isRadioactive: false,
      density: 1.696,
    },
    {
      id: 10,
      name: 'Neon',
      description: 'Element 10',
      symbol: 'Ne',
      category: 'Noble gases',
      atomicNumber: 10,
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      moreDetails: [
        { title: 'Detail 1', description: 'Neon is the tenth element.' },
        { title: 'Detail 2', description: 'It is a noble gas.' },
        { title: 'Detail 3', description: 'Neon glows with a distinctive red-orange light in signs.' },
        { title: 'Detail 4', description: 'It was discovered in 1898 by Sir William Ramsay.' },
        { title: 'Detail 5', description: 'Neon is non-reactive and does not form compounds easily.' },
        { title: 'Detail 6', description: 'It is used in neon signs and high-voltage indicators.' },
        { title: 'Detail 7', description: 'Neon is colorless, odorless, and inert.' },
        { title: 'Detail 8', description: 'Neon has an atomic number of 10.' },
      ],
      dateDiscovered: '1898',
      isRadioactive: false,
      density: 0.9002,
    }
  ];
  selectedSize: 'small' | 'medium' | 'large' = 'medium';
  rowSizes = [
    { name: 'Small', class: 'small-size' },
    { name: 'Normal', class: 'medium-size' },
    { name: 'Large', class: 'large-size' },
  ];

  columnSizes = [
    { name: 'Narrow', width: '10%' },
    { name: 'Normal', width: '50%' },
    { name: 'Wide', width: '100%' },
  ];

  selectedRowSize = 'medium-size';
  selectedColumnSize = '50%';

  ngOnInit() {
    this.columns = this.generateColumnsWithWidths(this.ELEMENT_DATA);
  }
  generateColumnsWithWidths(data: any[]): { key: string, label: string }[] {
    if (data.length === 0) return [];
    const columnDefs = Object.keys(data[0]).map((key) => {
      return {
        key: key,
        label: this.capitalize(key),
      };
    });

    return columnDefs;
  }


  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  setSize(size: 'small' | 'medium' | 'large'): void {
    this.selectedSize = size; 
  }
}
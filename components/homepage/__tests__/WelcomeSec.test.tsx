// import { render, screen } from '@testing-library/react';
// import { NextIntlClientProvider } from 'next-intl';
// import WelcomeSec from './WelcomeSec';
// import en from '@/messages/en.json';

// describe('WelcomeSec', () => {
//   it('renders the title and description', () => {
//     render(
//         <WelcomeSec />
//     );

//     // Check title by role
//     const title = screen.getByRole('heading', { name: /Welcome to our coffee house/i });
//     expect(title).toBeInTheDocument();

//     // Check description by text
//     const description = screen.getByText(/From a cultural standpoint, coffeehouses/i);
//     expect(description).toBeInTheDocument();

//     // Optional: check section
//     const section = screen.getByRole('region', { name: /Welcome to our coffee house/i });
//     expect(section).toBeInTheDocument();
//   });
// });

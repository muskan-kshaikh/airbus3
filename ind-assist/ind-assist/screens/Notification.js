import * as React from 'react';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (


  <DataTable>
  <h1>Announcements</h1>
    <DataTable.Header>
      <DataTable.Title>Date</DataTable.Title>
      <DataTable.Title>Employee</DataTable.Title>
      <DataTable.Title>Announcement</DataTable.Title>
      <DataTable.Title>Department</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>22/05/2021</DataTable.Cell>
      <DataTable.Cell>EMP001</DataTable.Cell>
      <DataTable.Cell>My Announcement 1</DataTable.Cell>
      <DataTable.Cell>IT</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>22/05/2021</DataTable.Cell>
      <DataTable.Cell>EMP002</DataTable.Cell>
      <DataTable.Cell>My Announcement 1</DataTable.Cell>
      <DataTable.Cell>Engineering</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
);

export default MyComponent;
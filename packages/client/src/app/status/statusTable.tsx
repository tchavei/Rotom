import { Children } from 'react';
import { CollectionElement } from '@react-types/shared';
import { Table, TableProps } from '@nextui-org/react';

interface StatusTableProps extends TableProps {
  tableLength: number;
  rowsPerPage: number;
}

export const StatusTable = ({ children, tableLength, rowsPerPage, ...props }: StatusTableProps): JSX.Element => {
  const newChildren = Children.toArray(children as unknown as CollectionElement<object>);
  newChildren.push(<Table.Pagination shadow noMargin align="center" rowsPerPage={rowsPerPage} />);

  return (
    <Table
      bordered
      color="secondary"
      key={`table-${tableLength}`}
      lined
      shadow={false}
      sticked
      css={{
        minWidth: '100%',
        '.nextui-table-hidden-row': {
          '--nextui-space-15': 0,
          maxHeight: `calc(300px - ${tableLength} * var(--nextui-space-15))`,
          display: 'block',
        },
        tfoot: {
          display: tableLength < rowsPerPage ? 'none' : 'table-footer-group',
        },
      }}
      {...props}
    >
      {newChildren as unknown as CollectionElement<object>}
    </Table>
  );
};

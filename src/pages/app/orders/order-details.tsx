import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export function OrderDetails () {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 3ee4ae47-1929-4969-ae93-dbc25d25fd30</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className='space-y-6'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='text-muted-foreground'>Status</TableCell>
              <TableCell className='flex justify-end'>
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-100' />
                  <span className='font-medium text-muted-foreground'>
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Cliente</TableCell>
              <TableCell className='flex justify-end'>
                Otávio Odenik
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Telefone</TableCell>
              <TableCell className='flex justify-end'>
                (17)99999-9999
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>E-mail</TableCell>
              <TableCell className='flex justify-end'>
                email@teste.com.br
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-muted-foreground'>Realizado há</TableCell>
              <TableCell className='flex justify-end'>
                há 3 minutos
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className='text-right'>Qtd.</TableHead>
              <TableHead className='text-right'>Preço</TableHead>
              <TableHead className='text-right'>Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Pepperoni Família</TableCell>
              <TableCell className='text-right'>2</TableCell>
              <TableCell className='text-right'>R$80,00</TableCell>
              <TableCell className='text-right'>R$140,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza 5 Queijos Família</TableCell>
              <TableCell className='text-right'>2</TableCell>
              <TableCell className='text-right'>R$65,00</TableCell>
              <TableCell className='text-right'>R$130,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className='text-right font-medium'>R$270,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}

export default function Header() {
  return (
    <header className='bg-blue-600 text-white shadow-md'>
      <nav className='container h-16 mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-50'>KDT03</div>
        <ul className='flex space-x-4'>
          <li className='hover:font-bold'>홈</li>
          <li className='hover:font-bold'>로또</li>
        </ul>
      </nav>
    </header>
  )
}

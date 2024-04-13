function Error({ error = 'Something went wrong...try again later' }) {
   return (
      <div className="m-auto flex h-screen items-center justify-center">
         <span className="font-semibold">{error}</span>
      </div>
   )
}

export default Error

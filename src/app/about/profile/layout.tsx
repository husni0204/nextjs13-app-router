const ProfileLayout = ({children} : {children: React.ReactNode}) => {
    return (
      <>
          <div>Judul</div>
          <div>{children}</div>
      </>
    )
  }
  
  export default ProfileLayout
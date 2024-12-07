const Footer = () => {
    return (
      <footer className="bg-background py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-primary mb-4 md:mb-0">
            DEMANUAL AI
          </div>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-muted-foreground">
          © 2023 DemanualAI. All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  
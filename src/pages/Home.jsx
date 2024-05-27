import data from '../../articles.json'

function Home() {
    console.log(data)
    return( 
        <main>
            <input type="text" name="busca" id="busca" placeholder="Digite aqui sua busca" />
        
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(
                        filme =>(
                            <div className='card' key={filme.title}>
                                <h1>{filme.title}</h1>
                                <img src={filme.image} alt={filme.title} />

                                <div className='text'>
                                    {filme.text.map(text =>(
                                        <span key={text}>{text}</span> 
                                    )
                                    )}
                                    
                                </div>
                                
                                <div className='tag'>
                                    {filme.tags.map(tag =>(
                                        <span key={tag} className='text-purple-900'>{tag}</span> 
                                    )
                                    )}
                                    
                                </div>
                            </div>
                        )
                    )
                }

            </div>
        </main>
     );
}

export default Home ;


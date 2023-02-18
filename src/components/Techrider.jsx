import React from 'react';

function Techrider(){
	return(
		<div>
            <section id="techrider">
                <div className="container my-p py-5">
                    <div className="row">
                        <h1 className="display-4 fw-bolder text-center mt-2 mb-3">Tech Rider</h1>
                        <hr className="w-75 mx-auto" />
                        <div className="col-md-14 text-center">
                            <h1 className="display-6 text-center">Equipment</h1>
                            <hr className="w-75 mx-auto" />
                            <p className="lead mx-auto mb-4">
                                Die hier aufgeführten technischen Anforderungen und Darstellung des Bühnenbildes, sind die optimalen
                                Bedingungen. Wir wissen das nicht immer alles realisierbar ist. Sollte es jedoch aus platztechnischen oder
                                technischen Gründen zu Anpassungen kommen müssen, sind diese erst nach vorher Rücksprache mit uns
                                zusammen zu erarbeiten und gegenzuzeichnen. Wir haben keinen eigenen Tontechniker, ich (Patrick) sollte
                                eure Sprache aber verstehen. Was das Monitoring anbetrifft sind wir zurzeit dankbar, wenn wir durch den
                                Hybridbetrieb an unser perfektes In Ear Setup herantasten können.
                            </p>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-md-14">
                            <h1 className="lead text-center fw-bolder mt-2 mb-3">Allgemeines und eigentlich selbstverständliches:</h1>
                            <hr className="w-75 mx-auto" />  
                            <p className="lead mx-auto mt-4" >    
                                <li>Anwesenheit eines Haustechnikers während des Soundchecks und des Auftritts plus einen Puffer von 30
                                    Minuten davor und danach.
                                </li>
                                <li>PA Anlage, ich glaube dazu braucht man nicht viel schreiben. Für eine Rockband angemessen und an
                                    den Veranstaltungsort passend dimensioniert.
                                </li>
                                <li>
                                    Bühnengröße mindestens 4,00 m x 4,00 m
                                </li>
                                <li>
                                    Die Bühne muss dauerhaft trocken, rutschfest und frei von Stolperfallen sein
                                </li>
                                <li>
                                Parkplatz für min. 2 Fahrzeuge (Bullis) muss in der direkten Nähe des Veranstaltungsortes geben sein
                                </li>
                            </p>
                            <h1 className="lead text-center fw-bolder mt-2 mb-3">Mischpult:</h1>
                            <hr className="w-25 mx-auto" />
                            <p className="lead  mx-auto mt-4" >    
                                <li>16 Kanäle</li>
                                <li>4x Aux</li>
                            </p>
                            <h1 className="lead text-center fw-bolder mt-2 mb-3">Monitoring:</h1>
                            <hr className="w-25 mx-auto" />
                            <p className="lead mx-auto mt-4" >    
                                <li>4X Wedge Monitor vom FOH (Pflicht) – Abmischung durch FOH</li>
                                <li>Zudem haben wir einen In Ear Rack mit gesplitteten Kanälen (siehe Kanalbelegung)– wäre für den Hybridbetrieb wünschenswert – Abmischung erfolgt durch uns</li>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-14">
                            <h1 className="lead text-center fw-bolder mt-2 mb-3">Instrumente:</h1>
                            <hr className="w-25 mx-auto" />  
                            <div className="row">   
                                <img src="/assets/TechRider1.PNG" alt="Techrider"
                                className="rounded mx-auto d-block w-75  mt-2"/>  
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-14">
                            <h1 className="lead text-center fw-bolder mt-2 mb-3">Stage Set-Up:</h1>
                            <hr className="w-25 mx-auto" />  
                            <div className="row">   
                                <img src="/assets/TechRider2.PNG" alt="Techrider"
                                className="rounded mx-auto d-block w-75  mt-2"/>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
		</div>
	)

}

export default Techrider;
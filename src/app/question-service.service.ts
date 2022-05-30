import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {



   questions = [
                
    {'question':'In welchem Jahr wurde der SV gegründet?',
    'number':1,        
    'a':{
                    'answer':'Im Jahr 1949',
                    'correct': false
    },
    'b':{
                    'answer':'Im Jahr 1929',
                    'correct': false
    },
    'c':{
                    'answer':'Im Jahr 1899',
                    'correct': true
    }
}

,

{'question':'Wer hat den Verein für Deutsche Schäferhunde gegründet?', 
    'number':2,        
    'a':{
                    'answer':'Rittmeier Max von Stephanitz',
                    'correct': true
    },
    'b':{
                    'answer':'Dr. Christoph Rummel',
                    'correct': false
    },
    'c':{
                    'answer':'Konrad Adenauer',
                    'correct': false
    }
    
}

,

{'question':'In welchem Ort hat der SV seinen Sitz',
    'number':3,
    'a':{
                    'answer':'Karlsruhe',
                    'correct': false
    },
    'b':{
                    'answer':'Augsburg',
                    'correct': true
    },
    'c':{
                    'answer':'Frankfurt/Main',
                    'correct': false
    }
},

{'question':'Welche Landesgruppen umfasst der SV', 
    'number':4,        
    'a':{
                    'answer':'15 Landesgruppen',
                    'correct': false
    },
    'b':{
                    'answer':'17 Landesgruppen',
                    'correct': false
    },
    'c':{
                    'answer':'19 Landesgruppen',
                    'correct': true
    }
},
{'question':'Welches Gesetz bzw. welche Verordnung regelt die Mindestanforderungen an eine tierartgerechte Haltung von Hunden im Freien?', 
    'number': 5,        
     'a':{
                    'answer':'Tierzuchtgesetz',
                    'correct': false
    },
    'b':{
                    'answer':'Tierschutz-Hundeverordnung',
                    'correct': true
    },
    'c':{
                    'answer':'Landeshundeverordnung',
                    'correct': false
    },
    'd':{
                    'answer':'Tiertransport-Verordnung',
                    'correct': false
    }
},
{'question':'Die Größe des Hundezwingers zur Haltung eines Deutschen Schäferhundes beträgt nach der Tierschutz-Hundeverordnung mindestens:',
    'number': 6 ,      
    'a':{
                    'answer':'6 qm Bodenfläche',
                    'correct': false
    },
    'b':{
                    'answer':'8 qm Bodenfläche',
                    'correct': true
    },
    'c':{
                    'answer':'10 qm Bodenfläche',
                    'correct': false
    }
},
{'question':'Die Fédération Cynologique Internationale (F.C.I.) ist:',
    'number': 7,        
    'a':{
                    'answer':'Der Weltverband einzelner Rassehunde-Zuchtvereine.',
                    'correct': false
    },
    'b':{
                    'answer':'Der Weltverband der kynologischen Verbände (wie z.B. des VDH).',
                    'correct': true
    },
    'c':{
                    'answer':'Eine internationale kynologische Organisation mit Einzelmitgliedern, die sich zum Wohle der Hunde engagieren.',
                    'correct': false
    }
},
{'question':'Wer ist Mitglied in der WUSV?',
    'number': 8,        
    'a':{
                    'answer':'Einzelpersonen.',
                    'correct': false
    },
    'b':{
                    'answer':'Schäferhundvereine aus aller Welt .',
                    'correct': true
    },
    'c':{
                    'answer':'Beides zusammen.',
                    'correct': false
    }
},
{'question':'Welche Rassen, bzw. deren Verbände, gehören der F.C.I. an?',
    'number': 9,        
    'a':{
                    'answer':'Alle inklusive der gemischtrassigen Hunde',
                    'correct': false
    },
    'b':{
                    'answer':'Nur deutsche Schäferhunde',
                    'correct': false
    },
    'c':{
                    'answer':'Weltweit ca. 340 Hunderassen, bzw. deren Verbände',
                    'correct': true
    }
},
{'question':'Welche Aussagen nach dem Naturschutz- bzw. Jagdrecht sind richtig?',
    'number': 10,     
    'a':{
                    'answer':'Tiere der freien Natur dürfen nicht mutwillig gestört werden.',
                    'correct': true
    },
    'b':{
                    'answer':'Hunde müssen in der freien Natur generell an der Leine geführt werden.',
                    'correct': false
    },
    'c':{
                    'answer':'Hunde dürfen sich im Jagdrevier nicht außerhalb des Einwirkungsbereichs ihres Hundeführers bewegen.',
                    'correct': true
    }
},
{'question':'Die Anwendung von Elektroreizgeräten…',
    'number': 11,     
    'a':{
                    'answer':'in der Hundeausbildung ist nach dem Tierschutzgesetz verboten.',
                    'correct': true
    },
    'b':{
                    'answer':'ist zur Erziehung schwer erziehbarer Hunde erlaubt.',
                    'correct': false
    },
    'c':{
                    'answer':'ist nur mit Sachkundenachweis zulässig.',
                    'correct': false
    }
},
{'question':'Welche allgemeinen Anforderungen gelten an das Halten von Hunden nach der Tierschutz-Hundeverordnung?',
    'number': 12,     
    'a':{
                    'answer':'Dem Hund muss ausreichend Auslauf im Freien gewährt werden.',
                    'correct': true
    },
    'b':{
                    'answer':'Der Hund muss ausreichend Umgang mit einer Betreuungsperson haben.',
                    'correct': true
    },
    'c':{
                    'answer':'Ein Hund muss vierteljährlich von einem Tierarzt untersucht werden.',
                    'correct': false
    }
},
{'question':'Welche Grundvoraussetzung muss erfüllt sein, um Mitglied einer SV-Ortsgruppe werden zu können?',
    'number': 13,     
    'a':{
                    'answer':'6 Monate vor Aufnahmeantrag regelmäßig zu den Übungsstunden kommen.',
                    'correct': false
    },
    'b':{
                    'answer':'Gültige Mitgliedschaft im SV.',
                    'correct': true
    },
    'c':{
                    'answer':'Mitgliedschaft im VDH.',
                    'correct': false
    }
},{'question':'Was ist der „Verband für das Deutsche Hundewesen (VDH)“?',
    'number': 14,     
    'a':{
                    'answer':'Der internationale Dachverband für die Kynologie.',
                    'correct': false
    },
    'b':{
                    'answer':'Der nationale Dachverband für das Hundewesen in Deutschland.',
                    'correct': true
    },
    'c':{
                    'answer':'Eine Vereinigung von Landesverbänden des Diensthundewesens.',
                    'correct': false
    }
},
{'question':'Wann darf ein Jagdausübungsberechtigter (Jäger) Hunde abschießen?',
    'number': 15,     
    'a':{
                    'answer':'Wenn Hunde den Waldweg verlassen.',
                    'correct': false
    },
    'b':{
                    'answer':'Wenn Hunde ohne Leine neben dem Halter herlaufen.',
                    'correct': false
    },
    'c':{
                    'answer':'Wenn Hunde unkontrolliert Wild hetzen.',
                    'correct': true
    }
},
{'question':'In welchem Alter sollten Welpen frühestens abgegeben werden?',
    'number': 16,     
    'a':{
                    'answer':'5. Lebenswoche',
                    'correct': false
    },
    'b':{
                    'answer':'8. Lebenswoche',
                    'correct': true
    },
    'c':{
                    'answer':'12. Lebenswoche',
                    'correct': false
    }
},
{'question':'Wer einen Hund im Freien hält, hat dafür zu sorgen, dass dem Hund…',
    'number': 17,     
    'a':{
                    'answer':'nur eine Schutzhütte zur Verfügung steht.',
                    'correct': false
    },
    'b':{
                    'answer':'nur ein beschatteter, wärmegedämmter Liegeplatz zur Verfügung steht.',
                    'correct': false
    },
    'c':{
                    'answer':'eine Schutzhütte sowie ein Liegeplatz zur Verfügung steht.',
                    'correct': true
    }
},
{'question':'Wie lange ist die Tollwutschutzimpfung in der BRD gültig?',
    'number': 18,     
    'a':{
                    'answer':'18 Monate.',
                    'correct': false
    },
    'b':{
                    'answer':'So lange, wie der Impfhersteller für eine Wiederholungsimpfung angibt. Die Gültigkeit muss im Impfausweis oder im EU-Heimtierpass vermerkt werden.',
                    'correct': true
    },
    'c':{
                    'answer':'3 Jahre.',
                    'correct': false
    }
},
{'question':'Wer stellt die Impfbescheinigung bzw. den Internationalen Impfpass aus?',
    'number': 19,     
    'a':{
                    'answer':'Der Züchter',
                    'correct': false
    },
    'b':{
                    'answer':'Der Tierarzt, der die Impfung durchgeführt hat.',
                    'correct': true
    },
    'c':{
                    'answer':'Die Veterinärämter.',
                    'correct': false
    }
},
{'question':'Zecken sind durch ihren Biss auch für den Hund gefährlich. Welche Krankheiten können sie auf den Hund übertragen?',
    'number': 20,     
    'a':{
                    'answer':'Tollwut',
                    'correct': false
    },
    'b':{
                    'answer':'Frühsommermeningoenzephalitis (FSME)',
                    'correct': true
    },
    'c':{
                    'answer':'Borreliose',
                    'correct': true
    }
},
{'question':'Gegen welche Infektionskrankheiten sollten Welpen im Alter von 8 Wochen geimpft werden?',
    'number': 21,     
    'a':{
                    'answer':'Staupe.',
                    'correct': true
    },
    'b':{
                    'answer':'Hepatitis (Infektiöse Leberentzündung).',
                    'correct': true
    },
    'c':{
                    'answer':'Leptospirose (Stuttgarter Hundeseuche).',
                    'correct': true
    },
    'd':{
                    'answer':'Parvovirose (sog. Katzenseuche).',
                    'correct': true
    },
    'e':{
                    'answer':'Maul- und Klauenseuche.',
                    'correct': false
    },
    'f':{
                    'answer':'Keine Impfung, da der Hund noch zu jung ist.',
                    'correct': false
    }
},
{'question':'Warum müssen Welpen regelmäßig entwurmt werden?',
    'number': 22,     
    'a':{
                    'answer':'Weil sie bereits mit der Muttermilch mit Würmern infiziert werden.',
                    'correct': true
    },
    'b':{
                    'answer':'Weil sie sich beim Kontakt mit Menschen mit Würmern infizieren.',
                    'correct': false
    },
    'c':{
                    'answer':'Weil sich die Hunde am eigenen und Kot anderer Hunde mit Wurmeiern infizieren.',
                    'correct': true
    }
},
{'question':'Fertigfuttermittel bei erwachsenen, gesunden Hunden…',
    'number': 23,     
    'a':{
                    'answer':'decken den Bedarf des Tieres.',
                    'correct': true
    },
    'b':{
                    'answer':'müssen durch spezielle Futtermittel ergänzt werden.',
                    'correct': false
    },
    'c':{
                    'answer':'dürfen in der Hundeernährung nicht ausschließlich verwendet werden.',
                    'correct': false
    }
},
{'question':'Welches Getränk muss Hunden immer zur Verfügung stehen?',                       
    'number': 24,     
    'a':{
                    'answer':'Tee',
                    'correct': false
    },
    'b':{
                    'answer':'Wasser',
                    'correct': true
    },
    'c':{
                    'answer':'Milch',
                    'correct': false
    }
},
{'question':'Wie lange dauert die Hitze bei einer gesunden Hündin insgesamt?',
    'number': 25,     
    'a':{
                    'answer':'10 Tage',
                    'correct': false
     },
    'b':{
                    'answer':'ca. 3 Wochen',
                    'correct': true
    },
    'c':{
                    'answer':'ca. 4 Wochen',
                    'correct': false
    }
},
{'question':'Wie oft im Jahr wird eine Hündin hitzig / läufig?',
    'number': 26,     
    'a':{
                    'answer':'Immer nur einmal.',
                    'correct': false
    },
    'b':{
                    'answer':'Meist zweimal (im Frühjahr und Herbst).',
                    'correct': true
    },
    'c':{
                    'answer':'Ungefähr viermal.',
                    'correct': false
    }
},
{'question':'Wie kann ein Hund vor einer Infektion mit Viren geschützt werden?',
    'number': 27,     
    'a':{
                    'answer':'Durch viel frische Luft.',
                    'correct': false
    },
    'b':{
                    'answer':'Durch hohen Gemüseanteil im Futter.',
                    'correct': false
    },
    'c':{
                    'answer':'Durch Impfung.',
                    'correct': true
    }
},
{'question':'Normale Temperatur des Hundes?',
    'number': 28,     
    'a':{
                    'answer':'37,5 – 37,5 °',
                    'correct': false
    },
    'b':{
                    'answer':'38,0 – 38,5 °',
                    'correct': true
    },
    'c':{
                    'answer':'39,0 - 40°',
                    'correct': false
    }
},
{'question':'Wie erkennt man, dass ein Hund krank ist?',
    'number': 29,     
    'a':{
                    'answer':'Veränderungen der Körpertemperatur,',
                    'correct': true
    },
    'b':{
                    'answer':'des Pulses,',
                    'correct': true
    },
    'c':{
                    'answer':'der Atmung.',
                    'correct': true
    },
    'd':{
                    'answer':'Gleich bleibender Appetit und Durst.',
                    'correct': false
    },
    'e':{
                    'answer':'eilnahmslosigkeit.',
                    'correct': true
    }
},
{'question':'Auf welche Art schmarotzt der Hundefloh?',
    'number': 30,     
    'a':{
                    'answer':'Er bohrt sich in die Oberhaut und ernährt sich von Gewebe.',
                    'correct': false
    },
    'b':{
                    'answer':'Er ernährt sich von Hautschuppen.',
                    'correct': false
    },
    'c':{
                    'answer':'Er saugt Blut.',
                    'correct': true
    }
},
{'question':'In welchem Alter werden Hündinnen geschlechtsreif?',
    'number': 31,     
    'a':{
                    'answer':'Mit ca. 4 Monaten',
                    'correct': false
    },
    'b':{
                    'answer':'Mit ca. 7 - 10 Monaten',
                    'correct': true
    },
    'c':{
                    'answer':'Mit ca. 18 Monaten',
                    'correct': false
    }
},
{'question':'Wie soll der Zaun beschaffen sein, mit dem das Grundstück, auf dem ein Hund gehalten wird, “ausbruchsicher” eingezäunt werden muss?',
    'number': 32,     
    'a':{
                    'answer':'Für den Hund unüberwindbar.',
                    'correct': true
    },
    'b':{
                    'answer':'Aus Stacheldraht',
                    'correct': false
    },
    'c':{
                    'answer':'So, dass sich der Hund nicht darunter durchgraben kann.',
                    'correct': true
    }
},
{'question':'Hunde benötigen keine Rückzugsmöglichkeit (Zufluchtsort), da sie jederzeit engen Kontakt zu den Mitgliedern der Familie pflegen.',
    'number': 33,     
    'a':{
                    'answer':'Stimmt',
                    'correct': false
    },
    'b':{
                    'answer':'Stimmt nicht',
                    'correct': true
    },
    'c':{
                    'answer':'Hängt von der Rasse ab. ',
                    'correct': false
    }
},
{'question':'Wie lang ist die Tragezeit einer Hündin?',
    'number': 34,     
    'a':{
                    'answer':'5 Monate',
                    'correct': false
    },
    'b':{
                    'answer':'45 Tage',
                    'correct': false
    },
    'c':{
                    'answer':'etwa 63 Tage',
                    'correct': true
    }
},
{'question':'Der ausgewachsene Hund hat:',
    'number': 35,     
    'a':{
                    'answer':'28 Zähne',
                    'correct': false
    },
    'b':{
                    'answer':'48 Zähne',
                    'correct': false
    },
    'c':{
                    'answer':'42 Zähne',
                    'correct': true
    }
},
{'question':'Welcher Sinn ist beim Hund nicht vorhanden?',
    'number': 36,     
    'a':{
                    'answer':'Gleichgewichtssinn',
                    'correct': false
    },
    'b':{
                    'answer':'Tastsinn',
                    'correct': false
    },
    'c':{
                    'answer':'Gerechtigkeitssinn',
                    'correct': true
    }
},
{'question':'Welche Regeln müssen immer beachtet werden, wenn der Hund im Auto bleiben muss?',
    'number': 37,     
    'a':{
                    'answer':'Auto immer im Schatten abstellen.',
                    'correct': true
    },
    'b':{
                    'answer':'Türen und Fenster gut verschließen, damit der Rassehund nicht gestohlen werden kann.',
                    'correct': false
    },
    'c':{
                    'answer':'Sonnenwanderung beachten, Hund und Auto immer wieder kontrollieren.',
                    'correct': true
    },
    'd':{
                    'answer':'Wasser anbieten.',
                    'correct': true
    }
},
{'question':'Wie muss der Nasenspiegel gesunder Hunde sein?',
    'number': 38,     
    'a':{
                    'answer':'Feucht und glänzend.',
                    'correct': true
    },
    'b':{
                    'answer':'Trocken und rissig.',
                    'correct': false
    }
},
{'question':'Wie oft soll ein ausgewachsener Hund entwurmt werden?',
    'number': 39,     
    'a':{
                    'answer':'Halbjährlich.',
                    'correct': false
    },
    'b':{
                    'answer':'Vierteljährlich.',
                    'correct': true
    },
    'c':{
                    'answer':'Einmal pro Jahr genügt.',
                    'correct': false
    }
},
{'question':'Wenn ein Hund hechelt, kann es sein,',
    'number': 40,     
    'a':{
                    'answer':'… dass er hungrig ist.',
                    'correct': false
    },
    'b':{
                    'answer':'… dass er Stress hat.',
                    'correct': false
    },
    'c':{
                    'answer':'… dass ihm heiß ist.',
                    'correct': true
    }
},
{'question':'Welche Vorsorgemaßnahmen sollten zur Gesunderhaltung des Hundes getroffen werden?',
    'number': 41,     
    'a':{
                    'answer':'Den Hund ausreichend impfen lassen und das Impfen jährlich wiederholen.',
                    'correct': true
    },
    'b':{
                    'answer':'Den ganzen Körper des Hundes täglich genau anschauen, z. B. beim Bürsten oder Trockenreiben und auf Veränderungen oder Parasitenbefall kontrollieren.',
                    'correct': true
    },
    'c':{
                    'answer':'Darauf achten, dass der Hund nicht zu dick wird.',
                    'correct': true
    },
    'd':{
                    'answer':'Nur das teuerste Futter kaufen.',
                    'correct': false
    },
    'e':{
                    'answer':'Den Hund jede Woche einmal mit Flohshampoo waschen.',
                    'correct': false
    }
},
{'question':'In welchem Zustand sollte sich der Hund zum Zeitpunkt der Impfung befinden?',
    'number': 42,     
    'a':{
                    'answer':'Er soll gesund sein.',
                    'correct': true
    },
    'b':{
                    'answer':'Er soll frei von Würmern sein.',
                    'correct': true
    },
    'c':{
                    'answer':'Er soll frei von Ungeziefer sein.',
                    'correct': true
    }
},
{'question':'Wie können Flöhe am Hund bekämpft werden?',
    'number': 43,     
    'a':{
                    'answer':'Indem man den Hund häufig schwimmen lässt.',
                    'correct': false
    },
    'b':{
                    'answer':'Durch Kontaktinsektizide, z. B. spezielle Flohhalsbänder.',
                    'correct': true
    },
    'c':{
                    'answer':'Durch rohe Zwiebeln.',
                    'correct': false
    }
},
{'question':'Was ist unbedingt wichtig bei der Abgabe der Welpen?',
    'number': 44,     
    'a':{
                    'answer':'Sie müssen geimpft und mehrfach entwurmt sein.',
                    'correct': true
    },
    'b':{
                    'answer':'Sie müssen stubenrein sein.',
                    'correct': false
    },
     'c':{
                    'answer':'Sie müssen leinenführig sein.',
                    'correct': false
    },
    'd':{
                    'answer':'Sie müssen richtige Draufgänger sein.',
                    'correct': false
    }
},
{'question':'Welche Hunde haben den höchsten Nährstoffbedarf?',
    'number': 45,     
    'a':{
                     'answer':'Hündinnen.',
                    'correct': false
    },
    'b':{
                    'answer':'Alte Hunde.',
                    'correct': false
    },
    'c':{
                    'answer':'Junge Hunde.',
                    'correct': true
    }
},
{'question':'Was sollte an einen Hund nicht verfüttert werden?',
    'number': 46,     
    'a':{
                    'answer':'Geflügelknochen.',
                    'correct': true
    },
    'b':{
                    'answer':'Gewürzte Speisereste.',
                    'correct': true
    },
    'c':{
                    'answer':'Rohes Schweinefleisch.',
                    'correct': true
    },
    'd':{
                    'answer':'Fisch.',
                    'correct': false
    }
},
{'question':'Zecken sollten so schnell wie möglich entfernt werden. Wie geht man vor?',
    'number': 47,     
    'a':{
                    'answer':'Mit der Zeckenzange oder Pinzette vorsichtig herausdrehen.',
                    'correct': true
    },
    'b':{
                    'answer':'Mit Öl bestreichen, damit die Zecke erstickt und von selbst abfällt.',
                    'correct': false
    },
    'c':{
                    'answer':'Zecke mit den Fingern zusammendrücken und schnell herausreißen.',
                    'correct': false
    }
},
{'question':'Wie erkennt man einen gesunden Hund?',
    'number': 48,     
    'a':{
                    'answer':'Aufmerksames Wesen.',
                    'correct': true
    },
    'b':{
                    'answer':'Glänzendes Fell.',
                    'correct': true
    },
    'c':{
                    'answer':'Fehlender Appetit.',
                    'correct': false
    }
},
{'question':'Wie oft soll ein Zwinger oder der Aufenthaltsbereich des Hundes gereinigt werden?',
    'number': 49,     
    'a':{
                    'answer':'Mindestens 1 x täglich.',
                    'correct': true
    },
    'b':{
                    'answer':'Wöchentlich.',
                    'correct': false
    },
    'c':{
                    'answer':'Monatlich.',
                    'correct': false
    }
},
{'question':'Wodurch werden Ohrenkrankheiten beim Hund verursacht?',
    'number': 50,     
    'a':{
                    'answer':'Durch Ohrenschmalz.',
                    'correct': false
    },
    'b':{
                    'answer':'Durch Schmutz und Fremdkörper.',
                    'correct': true
    },
    'c':{
                    'answer':'Durch Milben.',
                    'correct': true
    }
},
{'question':'Wie erkennt man sicher die Hitze bei einer Hündin?',
    'number': 51,     
    'a':{
                    'answer':'Am Anschwellen der Vagina.',
                    'correct': true
    },
    'b':{
                    'answer':'Am blutig-wässrigen Ausfluss.',
                    'correct': true
    },
    'c':{
                    'answer':'Am Verhalten der Rüden beim Zusammentreffen.',
                    'correct': true
    },
    'd':{
                    'answer':'Am besonders anhänglichen Verhalten der Hündin.',
                    'correct': false
    }
},
{'question':'Darf ich meinen Hund im Auto zurück lassen?',
    'number': 52,     
    'a':{
                    'answer':'Immer.',
                    'correct': false
    },
    'b':{
                    'answer':'Nur für kurze Zeit.',
                    'correct': true
    },
    'c':{
                    'answer':'Nie bei hohen Temperaturen und in der prallen Sonne.',
                    'correct': true
    },
    'd':{
                    'answer':'Ja, aber nur im Kofferraum.',
                    'correct': false
    }
},
{'question':'Was ist zu beachten, wenn man sich einem verletzten Hund nähern will - auch wenn es der eigene Hund ist?',
    'number': 53,     
    'a':{
                    'answer':'Beruhigend auf den Hund einreden und sich behutsam nähern.',
                    'correct': true
    },
    'b':{
                    'answer':'Forsch auf den Hund zugehen und ihn ins Hörzeichen nehmen.',
                    'correct': false
    }
},
{'question':'Wie behandelt man kleine Verletzungen der Haut in der Nähe von Augen und äußerem Gehörgang?',
    'number': 54,     
    'a':{
                    'answer':'Haare in der Umgebung scheren und vorsichtige Wundreinigung.',
                    'correct': true
    },
    'b':{
                    'answer':'Mit Wasser und Seife abwaschen.',
                    'correct': false
    }
},
{'question':'Welche Punkte müssen für eine artgerechte Haltung des Hundes mindestens erfüllt sein?',
    'number': 55,     
    'a':{
                    'answer':'Der Hund braucht täglich häufige Kontaktmöglichkeiten zu Menschen und/oder Hunden.',
                    'correct': true
    },
    'b':{
                    'answer':'Hunde brauchen jederzeit Zugang zu Wasser.',
                    'correct': true
    },
    'c':{
                    'answer':'Hunde brauchen ausreichend häufige und ausreichend lange Spaziergänge.',
                    'correct': true
    },
    'd':{
                    'answer':'Es muss gewährleistet sein, dass der Hund im Krankheitsfall medizinisch versorgt werden kann.',
                    'correct': true
    }
},
{'question':'Was verstehen wir unter dem Begriff: Wesen des Hundes?',
    'number': 56,     
    'a':{
                    'answer':'Nur angeborene Anlagen, Eigenschaften und Fähigkeiten.',
                    'correct': false
    },
    'b':{
                    'answer':'Nur erworbene Anlagen, Eigenschaften und Fähigkeiten.',
                    'correct': false
    },
    'c':{
                    'answer':'Gesamtheit aller angeborenen und erworbenen körperlichen und seelischen Eigenschaften, die das Verhalten des Hundes zu seiner Umwelt bestimmen.',
                    'correct': true
    }
},
{'question':'Die Sozialisierungsphase des Welpen findet statt:',
    'number': 57,     
    'a':{
                    'answer':'bis zur 3. Lebenswoche.',
                    'correct': false
    },
    'b':{
                    'answer':'ca. von der 8. bis 12. Lebenswoche.',
                    'correct': true
    },
    'c':{
                    'answer':'ca. vom 7. bis 12. Lebensmonat.',
                    'correct': false
    }
},
{'question':'Was sind die wichtigsten Dinge im Umgang mit dem Hund?',
    'number': 58,     
    'a':{
                    'answer':'Geduld, Lob und Konsequenz.',
                    'correct': true
    },
    'b':{
                    'answer':'Ständige Unterdrückung.',
                    'correct': false
    },
    'c':{
                    'answer':'Der tägliche, häufige Kontakt.',
                    'correct': true
    }
},
{'question':'Kann man Hunde miteinander spielen lassen?',
    'number': 59,     
    'a':{
                    'answer':'Jederzeit.',
                    'correct': false
    },
    'b':{
                    'answer':'Nur, wenn sie sich kennen und sie sich vertragen.',
                    'correct': true
    },
    'c':{
                    'answer':'Nur, wenn es gut sozialisierte Tiere sind.',
                    'correct': true
    }
},
{'question':'Der Hund…',
    'number': 60,     
    'a':{
                    'answer':'ist ein Einzelgänger.',
                    'correct': false
    },
    'b':{
                    'answer':'lebt als gemischtgeschlechtliches Paar.',
                    'correct': false
    },
    'c':{
                    'answer':'ist ein Rudeltier.',
                    'correct': true
    }
},
{'question':'Sie sind mit Ihrem freilaufenden Hund unterwegs. Ein Jogger kommt Ihnen entgegen. Wie verhalten Sie sich?',
    'number': 61,     
    'a':{
                    'answer':'Ich lasse den Hund weiter laufen.',
                    'correct': false
    },
    'b':{
                    'answer':'Ich bitte den Jogger, nicht so dicht vorbeizulaufen und sage, dass mein Hund nicht beißt.',
                    'correct': false
    },
    'c':{
                    'answer':'Ich leine den Hund an und führe ihn am Jogger vorbei.',
                    'correct': true
    }
},
{'question':'Sie gehen mit Ihrem freilaufenden Hund spazieren. Ein Spaziergänger bleibt zögernd und verängstigt stehen. Wie verhalten Sie sich?',
    'number': 62,     
    'a':{
                    'answer':'Mit Hörzeichen „Fuß“ zügig vorbeigehen.',
                    'correct': false
    },
    'b':{
                    'answer':'Den Hund weiter frei laufen lassen und selbst normal weitergehen.',
                    'correct': false
    },
    'c':{
                    'answer':'Den Hund anleinen.',
                    'correct': true
    }
},
{'question':'Ihr Hund läuft frei, nach mehrfachem Rufen kommt er nicht. Wie verhalten Sie sich?',
    'number': 63,     
    'a':{
                    'answer':'Sie laufen ihm nach und fangen ihn ein.',
                    'correct': false
    },
    'b':{
                    'answer':'Sie bleiben stehen und rufen, bis er kommt.',
                    'correct': false
    },
    'c':{
                    'answer':'Sie rufen und drohen im Strafe an.',
                    'correct': false
    },
    'd':{
                    'answer':'Sie drehen sich um und gehen langsam weg.',
                    'correct': true
    },
    'e':{
                    'answer':'Wenn der Hund dann doch kommt, wird er bestraft.',
                    'correct': false
    }
},
{'question':'Welche Erziehungsmethoden sind beim Hund anzuwenden?',
    'number': 64,     
    'a':{
                    'answer':'Antiautoritär.',
                    'correct': false
    },
    'b':{
                    'answer':'Konsequent.',
                    'correct': true
    },
    'c':{
                    'answer':'Je nach eigener Lebensauffassung.',
                    'correct': false
    }
},
{'question':'In der Familie sollte der Hund…',
    'number': 65,     
    'a':{
                    'answer':'ein gleichberechtigtes Familienmitglied sein.',
                    'correct': false
    },
    'b':{
                    'answer':'die Chefposition einnehmen.',
                    'correct': false
    },
    'c':{
                    'answer':'die unterste Rangstellung einnehmen.',
                    'correct': true
    }
},
{'question':'Beim Zusammensein von Hund und Kind sollte immer…',
    'number': 66,     
    'a':{
                    'answer':'der Hund beobachtet werden.',
                    'correct': false
    },
    'b':{
                    'answer':'Hund und Kind beobachtet werden.',
                    'correct': true
    },
    'c':{
                    'answer':'Keine besondere Beobachtung nötig.',
                    'correct': false
    }
},
{'question':'Der Welpe sollte…',
    'number': 67,     
    'a':{
                    'answer':'möglichst wenig Kontakt zur Umwelt bekommen, weil er sonst verunsichert wird.',
                    'correct': false
    },
    'b':{
                    'answer':'viel Kontakt zu Menschen, Artgenossen und Umweltreizen haben, damit er später in allen Situationen gut zurecht kommt.',
                    'correct': true
    },
    'c':{
                    'answer':'überwiegend im Zwinger gehalten werden.',
                    'correct': false
    }
},
{'question':'Ab welchem Alter kann mit der Erziehung des Hundes begonnen werden?',
    'number': 68,     
    'a':{
                    'answer':'Ab 2 - 3 Monate.',
                    'correct': true
    },
    'b':{
                     'answer':'Ab 9 Monaten.',
                    'correct': false
    },
    'c':{
                    'answer':'Nicht unter 12 Monate.',
                    'correct': false
    }
},
{'question':'Die Dauer einer Trainingseinheit mit dem Hund ist hauptsächlich abhängig…',
    'number': 69,     
    'a':{
                    'answer':'von den Witterungsbedingungen.',
                    'correct': false
    },
    'b':{
                    'answer':'vom Grenzwert der Leistungsfähigkeit (Belastungsgrenzen) des Hundes.',
                    'correct': true
    },
    'c':{
                    'answer':'davon, ob der Vorrat der "Leckerli" aufgebraucht ist.',
                    'correct': false
    }
},
{'question':'Bei konsequenter Ausbildung ist situationsangepasster, dosierte Korrektur nicht immer unumgänglich. Die Korrektureinwirkungen sind so zu gestalten, dass…',
    'number': 70,     
    'a':{
                    'answer':'der Hund sich gegen den Ausbilder stellt.',
                    'correct': false
    },
    'b':{
                    'answer':'der Hund sich durch richtiges Reagieren der Korrektur entziehen kann.',
                    'correct': true
    },
    'c':{
                    'answer':'die erfolgten Korrektureinwirkungen auf Dauer erkennbar sind.',
                    'correct': false
    }
},
{'question':'Eine erfolgreiche Ausbildung ist in erster Linie abhängig von…',
    'number': 71,     
    'a':{
                    'answer':'der Beschaffenheit und Art des Motiviergegenstandes.',
                    'correct': false
    },
    'b':{
                    'answer':'von der Hundeführer-Hund-Beziehung.',
                    'correct': true
    },
    'c':{
                    'answer':'von der Blutlinie des Hundes.',
                    'correct': false
    }
},
{'question':'Stress in der Ausbildung entsteht durch…',
    'number': 72,     
    'a':{
                    'answer':'Umweltreize.',
                    'correct': false
    },
    'b':{
                    'answer':'andauernde körperliche und seelische Belastung.',
                    'correct': true
    },
    'c':{
                    'answer':'Entzug des Spielgegenstandes.',
                    'correct': false
    }
},
{'question':'Ausbildung kann je nach Intensität Stress hervorrufen. Welche Möglichkeiten der Stressbewältigung gibt es?',
    'number': 73,     
    'a':{
                    'answer':'Bestätigung bei richtigem Verhalten durch ein Spielzeug, Futter oder Lob.',
                    'correct': true
    },
    'b':{
                    'answer':'Mehrmaliges Wiederholen einer positiv gezeigten Leistung.',
                    'correct': false
    }
},
{'question':'Nennen Sie die 5 Sinne des Hundes:',
    'number': 74,     
    'a':{
                    'answer':'Gesichtsinn',
                    'correct': true
    },
    'b':{
                    'answer':'Frohsinn',
                    'correct': false
    },
    'c':{
                    'answer':'Geschmacksinn',
                    'correct': true
    },
    'd':{
                    'answer':'Geruchsinn',
                    'correct': true
    },
    'e':{
                    'answer':'Sechster Sinn',
                    'correct': false
    },
    'f':{
                    'answer':'Tastsinn',
                    'correct': true
    },
    'g':{
                    'answer':'Gehörsinn',
                    'correct': true
    }
},
{'question':'Wann entwickelt ein Hund Jagdverhalten?',
    'number': 75,     
    'a':{
                    'answer':'In der 8. bis 14. Lebenswoche',
                    'correct': false
    },
    'b':{
                    'answer':'Im 6. bis 12. Lebensmonat',
                    'correct': true
    },
    'c':{
                    'answer':'Im 2. Lebensjahr',
                    'correct': false
    }
},
{'question':'Jeder Hund besitzt von Geburt an:',
    'number': 76,     
    'a':{
                    'answer':'Kinderfreundlichkeit.',
                    'correct': false
    },
    'b':{
                    'answer':'Unterordnungsbereitschaft.',
                    'correct': true
    },
    'c':{
                    'answer':'Dominanzstreben.',
                    'correct': true
    }
},
{'question':'Warum entwickeln sich Hunde zu Problemhunden?',
    'number': 77,     
    'a':{
                    'answer':'Durch isolierte Haltung.',
                    'correct': true
    },
    'b':{
                    'answer':'Ist bereits angeboren.',
                    'correct': false
    },
    'c':{
                    'answer':'Durch falsche Ausbildung.',
                    'correct': true
    },
    'd':{
                    'answer':'Durch Haltung an der Kette.',
                    'correct': true
    }
},
{'question':'Wodurch entstehen die gravierendsten Ausbildungsfehler?',
    'number': 78,     
    'a':{
                    'answer':'Überforderung des Hundes',
                    'correct': true
    },
    'b':{
                    'answer':'Unbeherrschtheit des Hundeführers',
                    'correct': true
    },
    'c':{
                    'answer':'Kurze Übungseinheiten',
                    'correct': false
    }
},
{'question':'An welchen Körperteilen ist am schnellsten die Stimmung des Hundes abzulesen?',
    'number': 79,     
    'a':{
                    'answer':'An den Nackenhaaren',
                    'correct': true
    },
    'b':{
                    'answer':'An der Rute',
                    'correct': true
    },
    'c':{
                    'answer':'An den Ohren',
                    'correct': true
    },
    'd':{
                    'answer':'An den Augen',
                    'correct': false
    }
},
{'question':'Ihr Hund wird in eine Beißerei mit einem gleich großen Hund verwickelt. Wie verhalten Sie sich?',
    'number': 80,     
    'a':{
                    'answer':'Sie treten zurück und lassen dem Schicksal seinen Lauf. Alles andere könnte für mich und meinen Hund gefährlich werden.',
                    'correct': true
    },
    'b':{
                    'answer':'Sie packen ihn am Hals und Rückenfell und ziehen ihn aus dem Geschehen.',
                    'correct': false
    },
    'c':{
                    'answer':'Sie versuchen, gemeinsam mit ihm den Gegner zu verjagen.',
                    'correct': false
    },
    'd':{
                    'answer':'Sie ziehen an der Leine und schlagen notfalls auf ihn ein.',
                    'correct': false
    }
},
{'question':'Den Hund an die Leine zu nehmen ist…',
    'number': 81,     
    'a':{
                    'answer':'immer richtig.',
                    'correct': false
    },
    'b':{
                    'answer':'falsch.',
                    'correct': false
    },
    'c':{
                    'answer':'situationsbedingt richtig.',
                    'correct': true
    }
},
{'question':'Ihr Hund sieht ein Objekt. Er knurrt und zieht die Lefzen hoch. Wie reagieren Sie?',
    'number': 82,     
    'a':{
                    'answer':'Ableinen.',
                    'correct': false
    },
    'b':{
                    'answer':'Anleinen und mit Hörzeichen Richtung wechseln.',
                    'correct': false
    },
    'c':{
                    'answer':'Anleinen, kontrollieren und blockieren.',
                    'correct': true
    },
    'd':{
                    'answer':'Durch Vorwarnung an die Umgebung auf die Aggression des Hundes hinweisen.',
                    'correct': false
    }
},
{'question':'Wie sollte ein Hund getadelt werden?',
    'number': 83,     
    'a':{
                    'answer':'Durch Schläge.',
                    'correct': false
    },
    'b':{
                    'answer':'Über Leinenruck.',
                    'correct': true
    },
    'c':{
                    'answer':'Über die Stimme.',
                    'correct': true
    }
},
{'question':'Die unerwünschten Aggressionen des Hundes...',
    'number': 84,     
    'a':{
                    'answer':'entstehen durch falsche Erziehung.',
                    'correct': true
    },
    'b':{
                    'answer':'sind ausschließlich ererbte Eigenschaften.',
                    'correct': false
    },
    'c':{
                    'answer':'können durch gezielte Ausbildung völlig unterdrückt werden.',
                    'correct': false
    },
    'd':{
                    'answer':'können durch gezielte Ausbildung unter Kontrolle gehalten werden.',
                    'correct': true
    }
},
{'question':'Wie beeinflussen Zerr- und Raufspiele das Selbstbewusstsein des Hundes, wenn er als Sieger hervorgeht?',
    'number': 85,     
    'a':{
                    'answer':'Minderung',
                    'correct': false
    },
    'b':{
                    'answer':'Steigerung',
                    'correct': true
    },
    'c':{
                    'answer':'Keinen Einfluss',
                    'correct': false
    }
},
{'question':'Warum verhalten sich Hunde häufig gegenüber Kindern anders als gegenüber erwachsenen Personen?',
    'number': 86,     
    'a':{
                    'answer':'Weil sie Kinder als Respektspersonen ansehen.',
                    'correct': false
    },
    'b':{
                    'answer':'Weil Kinder ihr Verhalten schnell ändern und sich schnell und zum Teil unkontrolliert bewegen.',
                    'correct': true
    },
    'c':{
                    'answer':'Weil Kinder häufig plötzlich laut schreien.',
                    'correct': true
    },
    'd':{
                    'answer':'Weil sich Kinder häufig falsch verhalten.',
                    'correct': true
    }
},
{'question':'Der Hund sitzt im Sessel und knurrt, wenn sich jemand dazu setzen will. Ist das ein…',
    'number': 87,     
    'a':{
                    'answer':'normales Verhalten.',
                    'correct': false
    },
    'b':{
                    'answer':'unterwürfiges Verhalten.',
                    'correct': false
    },
    'c':{
                    'answer':'dominierendes Verhalten.',
                    'correct': true
    }
},
{'question':'Der Hund knurrt Gäste an, die Ihre Wohnung betreten. Wie verhalten Sie sich?',
    'number': 88,     
    'a':{
                    'answer':'Gäste auffordern, den Hund zu begrüßen.',
                    'correct': false
    },
    'b':{
                    'answer':'Hund mit deutlichem Befehl auf seinen Platz schicken.',
                    'correct': true
    },
    'c':{
                    'answer':'Hund gut zureden und mit Streicheln oder Leckerchen beruhigen.',
                    'correct': false
    }
},
{'question':'Welche Aussagen über die Grundsätze bei Hörzeichen in der Hundeausbildung sind richtig?',
    'number': 89,     
    'a':{
                    'answer':'Hörzeichen können in Wortsätzen eingebaut werden.',
                    'correct': false
    },
    'b':{
                    'answer':'Der Hund lernt am leichtesten einsilbige Hörzeichens.',
                    'correct': true
    },
    'c':{
                    'answer':'Für dieselben Übungen sollten immer die gleichen Ausdrücke verwendet werden.',
                    'correct': true
    }
},
{'question':'Ein Hörzeichen wird eingeübt…',
    'number': 90,     
    'a':{
                    'answer':'nur über das Gehör',
                    'correct': false
    },
    'b':{
                    'answer':'nur über Körperkontakt',
                    'correct': false
    },
    'c':{
                    'answer':'nur über Sichtzeichen',
                    'correct': false
    },
    'd':{
                    'answer':'über alles zusammen',
                    'correct': true
    }
},
{'question':'Wann sollte ein Hund nach gutem Verhalten belohnt werden?',
    'number': 91,     
    'a':{
                    'answer':'Nach 5 Minuten.',
                    'correct': false
    },
    'b':{
                    'answer':'Unmittelbar danach.',
                    'correct': true
    },
    'c':{
                    'answer':'Zeit spielt keine Rolle.',
                    'correct': false
    }
},
{'question':'Was versteht man unter Instinkt?',
    'number': 92,     
    'a':{
                    'answer':'Das antrainierte Verhalten des Hundes.',
                    'correct': false
    },
    'b':{
                    'answer':'Die angeborene Anlage, die arterhaltende Verhaltensweisen auslöst.',
                    'correct': true
    },
    'c':{
                    'answer':'Die angeborene Anlage in Kombination mit antrainiertem Verhalten.',
                    'correct': false
    }
},
{'question':'Was versteht man unter Ausbilden?',
    'number': 93,     
    'a':{
                    'answer':'Den Hund vollkommen zu unterwerfen.',
                    'correct': false
    },
    'b':{
                    'answer':'Mit Hilfe eines Reizes den Hund zu einem gewünschten Verhalten veranlassen oder ihn von einem unerwünschten Verhalten abbringen.',
                    'correct': true
    },
    'c':{
                    'answer':'Das Triebverhalten des Hundes ausnutzen, um den Hund zur Abwehr von Gefahren als Verteidigungsmittel heranzuziehen.',
                    'correct': false
    }
},
{'question':'Welches ist das am besten entwickelte Sinnesorgan beim Hund?',
    'number': 94,     
    'a':{
                    'answer':'Der Gerechtigkeitssinn.',
                    'correct': false
    },
    'b':{
                    'answer':'Der Gefühlssinn.',
                    'correct': false
    },
    'c':{
                    'answer':'Der Geruchssinn.',
                    'correct': true
    }
},
{'question':'Was gehört zur Erziehung des jungen Hundes in erster Linie?',
    'number': 95,     
    'a':{
                    'answer':'Dass er dem Hörzeichen für Herankommen folgt.',
                    'correct': true
    },
    'b':{
                    'answer':'Die Gewöhnung an die Leine und an die Pflege des Hundes.',
                    'correct': true
    },
    'c':{
                    'answer':'Die Gewöhnung des Hundes an den Strassenverkehr.',
                    'correct': true
    },
    'd':{
                    'answer':'Die Sozialisierung des Hundes mit anderen Menschen, anderen Tierarten und Artgenossen.',
                    'correct': true
    },
    'e':{
                    'answer':'Dass er den Futternapf immer leer frisst.',
                    'correct': false
    }
},
{'question':'Welche Wesenseigenschaften sind bei einem Familien und Begleithund erwünscht?',
    'number': 96,     
    'a':{
                    'answer':'Gute Führung, enge Bindung an seinen Herrn.',
                    'correct': true
    },
    'b':{
                    'answer':'Triebverhalten, Schärfe und Jagdtrieb.',
                    'correct': false
    },
    'c':{
                    'answer':'Wesenssicherheit, vorab in friedlichen Situationen, gegenüber Menschen und im Verkehr.',
                    'correct': true
    }
},
{'question':'Wie sollte ein Hund korrigiert werden?',
    'number': 97,     
    'a':{
                    'answer':'Durch ein scharf ausgesprochenes Hörzeichen, z. B. „Pfui“, „Aus“.',
                    'correct': true
    },
    'b':{
                    'answer':'Durch Schicken auf seinen Platz.',
                    'correct': false
    },
    'c':{
                    'answer':'Durch Schläge mit einem Stock, bis er sich unterwirft.',
                    'correct': false
    },
    'd':{
                    'answer':'Durch Wegnahme des Spielzeugs.',
                    'correct': false
    },
    'e':{
                    'answer':'Durch Streichen des Spaziergangs.',
                    'correct': false
    }
},
{'question':'Eine gute Erziehung oder Ausbildung ist dazu geeignet…',
    'number': 98,     
    'a':{
                    'answer':'Aggression zu fördern.',
                    'correct': false
    },
    'b':{
                    'answer':'Aggression zu kontrollieren.',
                    'correct': true
    },
    'c':{
                    'answer':'weder noch.',
                    'correct': false
    }
},
{'question':'Ein Hund kann bedingt…',
    'number': 99,     
    'a':{
                    'answer':'abstrakt denken.',
                    'correct': false
    },
    'b':{
                    'answer':'verknüpfen.',
                    'correct': true
    },
    'c':{
                    'answer':'im Gedächtnis behalten.',
                    'correct': true
    },
    'd':{
                    'answer':'aus dem Gedächtnis reproduzieren.',
                    'correct': true
    }
},
{'question':'Wie beruhigen Sie Ihren ängstlichen Hund?',
    'number': 100,   
    'a':{
                    'answer':'Durch ruhiges Zureden.',
                    'correct': true
    },
    'b':{
                    'answer':'Durch striktes Hörzeichen.',
                    'correct': false
    },
    'c':{
                    'answer':'Durch an die Leine legen.',
                    'correct': false
    },
    'd':{
                    'answer':'Durch Körperkontakt.',
                    'correct': true
    }
},














/*{'question':'',
    'number': ,          
    'a':{
                    'answer':'',
                    'correct': false
    },
    'b':{
                    'answer':'',
                    'correct': false
    },
    'c':{
                    'answer':'',
                    'correct': false
    }
},

*/


];




  constructor() { }


  getQuestions(){

    return this.questions[Math.round( Math.random()*this.questions.length-1)];
  }
}

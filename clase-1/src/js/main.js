import { rowCountTableBody } from './utils.js'

const btnCargar = document.querySelector('#btnCargarDatos')
btnCargar.addEventListener('click', IngresarRegistrosDeSuma)

function IngresarRegistrosDeSuma () {
  const nombre = prompt('Ingresa tu nombre:')
  let repeticiones

  if (nombre) {
    alert(`${nombre}, sumemos dos numeros. Ambos deben ser enteros.`)
    do {
      repeticiones = parseInt(prompt('Indicame la cantidad de operaciones que realizaremos:'))
    } while (isNaN(repeticiones))

    for (let i = 0; i < repeticiones; i++) {
      const numeroA = parseInt(prompt('Ingresa el primer numero:'))
      const numeroB = parseInt(prompt('Ingresa el segundo numero:'))

      const resultado = numeroA + numeroB
      insertarResultado(nombre, numeroA, numeroB, resultado)
      alert(`${nombre}! Tu resultado es: ${resultado}`)
    }
  } else {
    alert('Operacion abortada')
  }
}

function insertarResultado (usuario, numeroA, numeroB, resultado) {
  const tablaResultados = document.querySelector('#tablaResultados')
  const tablaResultadosBody = tablaResultados.querySelector('tbody')
  const rowCount = rowCountTableBody(tablaResultadosBody, 'tr')

  const newTr = document.createElement('tr')
  const id = document.createElement('td')
  const tdUsuario = document.createElement('td')
  const tdNumberA = document.createElement('td')
  const tdNumberB = document.createElement('td')
  const tdResultado = document.createElement('td')

  id.innerHTML = rowCount
  tdUsuario.innerHTML = usuario
  tdNumberA.innerHTML = numeroA
  tdNumberB.innerHTML = numeroB
  tdResultado.innerHTML = resultado

  newTr.appendChild(id)
  newTr.appendChild(tdUsuario)
  newTr.appendChild(tdNumberA)
  newTr.appendChild(tdNumberB)
  newTr.appendChild(tdResultado)

  newTr.classList.add(`result-${rowCount}`)
  tablaResultadosBody.appendChild(newTr)
}

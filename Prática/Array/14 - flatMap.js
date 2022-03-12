
    let escola = [
        {
            turma: 'M1',
            alunos: [{nome: 'Gustavo', nota: 8.1}, {nome: 'Ana', nota: 9.3}]
        },
        {
            turma: 'M2',
            alunos: [{nome: 'Rebeca', nota: 8.9}, {nome: 'Roberto', nota: 7.3}]
        }
    ]


// primeira forma
/*let getAlunos = e => e.alunos
let alunos = escola.map(getAlunos)

let juntarAlunos = (a, e) => a.concat(e)
let alunosJuntos = alunos.reduce(juntarAlunos)

let juntarNotas = e => e.nota
let notas = alunosJuntos.map(juntarNotas)

let somarNotas = (a, e) => a + e
let soma = notas.reduce(somarNotas).toFixed(2)
console.log(soma)
*/
// segunda forma
let getNotaAluno = aluno => aluno.nota // pegando as notas de cada aluno

// pegando alunos de cada turma e depois a nota dos alunos da turma
let getTurma = turma => turma.alunos.map(getNotaAluno) 

let notas = escola.map(getTurma)
notas
console.log(notas.flat())
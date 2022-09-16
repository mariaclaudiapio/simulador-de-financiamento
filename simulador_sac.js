function simula() {
    let valor = document.getElementById("valor").valueAsNumber
    let prazoAnos = document.getElementById("prazoAnos").valueAsNumber
    let prazoMeses = prazoAnos * 12

    let jurosAno = document.getElementById("jurosAno").valueAsNumber
    let jurosMes = (1 + jurosAno) ** (1 / 12) - 1
    let amortizacao = valor / prazoMeses

    document.getElementById("prazoMeses").valueAsNumber = prazoMeses
    document.getElementById("juroMes").valueAsNumber = jurosMes

    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    let jurosAcumulados = 0
    for(let i = 0; i < prazoMeses; i++) {
        let saldoDevedor = valor - amortizacao * i
        let jurosPrestacao = saldoDevedor * jurosMes
        jurosAcumulados += jurosPrestacao
        let totalPrestacao = amortizacao + jurosPrestacao

        let tr = document.createElement("tr");
        tr.append(criaTd(i + 1))
        tr.append(criaTd(amortizacao.toFixed(2)))
        tr.append(criaTd(jurosPrestacao.toFixed(2)))
        tr.append(criaTd(totalPrestacao.toFixed(2)))
        tbody.append(tr)
    }

    document.getElementById("jurosAcumulados").valueAsNumber = jurosAcumulados.toFixed(2)
}

function criaTd(conteudo) {
    let td = document.createElement("td")
    td.textContent = conteudo
    return td
}
simula()


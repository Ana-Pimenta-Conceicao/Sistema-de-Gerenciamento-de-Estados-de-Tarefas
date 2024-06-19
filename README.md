# Sistema de Gerenciamento de Estados de Tarefas


<img src="imagem.png" alt="Exemplo imagem">

> Um sistema de gerenciamento de tarefas em C# usando o padrão de projeto State, permitindo que as tarefas mudem de estado (Criado, Em Progresso, Concluído, Cancelado) via endpoints RESTful. O sistema seguie boas práticas de programação orientada a objetos. Endpoints permitirão criar novas tarefas, atualizar estados e consultar o estado atual das tarefas.

 <hr/>
 
 ## 🚨 Requisitos do Sistema

### Padrão State
- Implementar padrão State para estados de tarefas.
- Estados: Criado, Em Progresso, Concluído, Cancelado.
- Classe Task com id, name, description.

### Endpoints RESTful
- Criar Tarefa: POST /tasks
- Alterar Estado:
> Iniciar: PUT /tasks/{id}/start
Concluir: PUT /tasks/{id}/complete
Cancelar: PUT /tasks/{id}/cancel
Consultar Estado: GET /tasks/{id}

### Persistência de Dados
- Banco de dados relacional.
- Utilização do Entity Framework.

### Boas Práticas
- Controle de versão Git com commits regulares.


<hr/>


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você tem o PgAdmin instalado em sua Máquina

<br/>


## 🚀 Instalando o Sistema de Gerenciamento de Estados de Tarefas

- Você instalou o projeto que está armazenado nesse repositório

<br/>

## ☕ Usando Sistema de Gerenciamento de Estados de Tarefas

Para usar <nome_do_projeto>, siga estas etapas:


  ```
  add-migration [nomeMigration]
--
  update-database
  ```

<hr/>

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ana-Pimenta-Conceicao" title="Perfil da Ana">
        <img src="https://avatars.githubusercontent.com/u/128404411?v=4" width="100px;" alt="Foto do Ana no GitHub"/><br>
        <sub>
          <b>Ana Vitória</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

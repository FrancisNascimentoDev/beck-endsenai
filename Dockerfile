# criar imagem como obuntu e node.js
FROM node 

#PASTA SE TORNA /home/node/app PASTA EXPECIFICA
WORKDIR /home/node/app/

# O DIRETORIO DE ONDE VOU EXECUTATAR TODOS OS COMANDOS BASE
########################### COPY ################################
#################################################################

#COPIA A PASTA O DIRETORIO TODO E COLA no monento do BUILD
# // COPY . .       //


#copiar aonde vai ficar o arquivo teste.js
# TESTE.JS é o arquivo que vai ser copiado para a pasta app 

# //  COPY teste.js /home/node/app/        //


# ALTERAÇÃO EM TEMPO REAL 
VOLUME /home/node/app

#################################################################
#############   CODIGOS PARA GERAR CONTEINER  ###################
#################################################################
### criar o container meu node ###  
# 1-> docker build -t meu-node .

### ativar conteiner meu node ###
# 2-> docker run -it meu-node bash

# ls
# cd /home/node/app


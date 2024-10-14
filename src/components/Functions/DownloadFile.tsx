
export const downloadFile = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `../../../../../public/DownloadFiles/${fileName}`;
    link.download = fileName; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o clique
  };
  
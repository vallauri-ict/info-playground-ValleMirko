using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Es07_CostruzioneCoda
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
        struct paziente
        {
            public string nome;
            public string eta;
            public string colore;
        }

        Queue<paziente> rosso = new Queue<paziente>();
        Queue<paziente> giallo = new Queue<paziente>();
        Queue<paziente> verde = new Queue<paziente>();
        Queue<paziente> bianco = new Queue<paziente>();
        string[] vet = { "Rosso", "Giallo", "Verde", "Bianco" };
        static Random rnd = new Random();

        private void btnRegistra_Click(object sender, EventArgs e)
        {
            bool ok = true;
            paziente p = new paziente();
            if (txtNome.Text != "")
            {
                p.nome = txtNome.Text;
            }
            else
            {
                MessageBox.Show("Inserire il nome del paziente");
                ok = false;
            }
            if (txtEta.Text != "")
            {
                p.eta = txtEta.Text;
            }
            else
            {
                MessageBox.Show("Inserire l'eta del paziente");
                ok = false;
            }
            if (ok)
            {
                string colore = vet[rnd.Next(0, vet.Length)];
                MessageBox.Show(colore);
                switch (colore)
                {
                    case "Rosso":
                        {
                            p.colore = "Rosso";
                            rosso.Enqueue(p);
                            break;
                        }
                    case "Giallo":
                        {
                            p.colore = "Giallo";
                            giallo.Enqueue(p);
                            break;
                        }
                    case "Verde":
                        {
                            p.colore = "Verde";
                            verde.Enqueue(p);
                            break;
                        }
                    case "Bianco":
                        {
                            p.colore = "Bianco";
                            bianco.Enqueue(p);
                            break;
                        }
                }
            }
        }
        private void btnRicevi_Click_1(object sender, EventArgs e)
        {
            {
                if (rosso.Count != 0)
                {
                    MessageBox.Show(rosso.Dequeue().nome.ToString());
                }
                else if (giallo.Count != 0)
                {
                    MessageBox.Show(giallo.Dequeue().nome.ToString());
                }
                else
                {
                    if (verde.Count != 0)
                    {
                        MessageBox.Show(verde.Dequeue().nome.ToString());
                    }
                    else
                    {
                        try
                        {
                            MessageBox.Show(bianco.Dequeue().nome.ToString());
                        }
                        catch (Exception)
                        {
                            MessageBox.Show("Nessun paziente");
                        }
                    }
                }
            }
        }
    }
}


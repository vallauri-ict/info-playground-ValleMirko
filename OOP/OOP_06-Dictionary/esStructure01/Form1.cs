using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.VisualBasic;

namespace esStructure01
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        Dictionary<int, string> db = new Dictionary<int, string>();
        int i = 0;
        private void Form1_Load(object sender, EventArgs e)
        {
            dgv.AutoResizeColumns();
            dgv.ClearSelection();
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            addElement();
            visualDGV();
        }

        private void addElement()
        {
            string s = Interaction.InputBox("inserisci nome articolo");
            i++;
            db.Add(i, s);
        }

        int j = 0;
        private void visualDGV()
        {
            dgv.Rows.Add();
            foreach (var key in db.Keys)
            {
                dgv.Rows[j].Cells[0].Value = key;
            }
            foreach (var val in db.Values)
            {
                dgv.Rows[j].Cells[1].Value = val;
            }
            j++;
        }

        private void btnNIns_Click(object sender, EventArgs e)
        {
            nUD.Value = db.Count;
        }

        private void btnCercaChiave_Click(object sender, EventArgs e)
        {
            bool trovato = false;
            int k = int.Parse(Interaction.InputBox("Inserisci chiave di ricerca"));
            foreach (var key in db.Keys)
            {
                if ((int)key==k)
                {
                    MessageBox.Show("Numero della key dell'Articolo "+key+" = "+db[key]);
                    return;
                }
            }
            if (!trovato)
            {
                MessageBox.Show("Il Codice articolo ineserito è INESISTENTE!! ");
            }
        }
    }
}

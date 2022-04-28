using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Es_08_Gestione_container
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        public struct container
        {
            public string code;
            public string weigth;
            public string tara;
        }
        Stack<container> st = new Stack<container>();
        int count = 0;
        int i = 0;

        private void Form1_Load(object sender, EventArgs e)
        {
            dgv.ClearSelection();
            dgv.AutoResizeRows();
            btnVisual.Enabled = false;
        }

        private void btnCaricaStruct_Click(object sender, EventArgs e)
        {
            caricaStack();
        }
        private void caricaStack()
        {
            count++;
            container c;
            c.code = "c" + count;
            c.weigth = Interaction.InputBox("Inserire il PESO del container (in chilogrammi)") + " kg";
            c.tara = Interaction.InputBox("Inserire la TARA del container (in chilogrammi)") + " kg";
            st.Push(c);
            btnVisual.Enabled = true;
        }
        private void dgv_CellContentClick(object sender, EventArgs e)
        {
            container c;
            for (; i < count; i++)
            {
                dgv.Rows.Add();
                c = st.Pop();
                dgv.Rows[i].Cells[0].Value = c.code;
                dgv.Rows[i].Cells[1].Value = c.weigth;
                dgv.Rows[i].Cells[2].Value = c.tara;
            }
            btnVisual.Enabled = false;
        }
    }
}

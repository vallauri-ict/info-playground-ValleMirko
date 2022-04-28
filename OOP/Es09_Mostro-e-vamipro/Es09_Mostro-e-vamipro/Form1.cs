using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Es09_Mostro_e_vamipro
{
    public partial class Form1 : Form
    {
        Random casuale = new Random();
        public Form1()
        {
            InitializeComponent();

        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void btnGeneraMostro_Click(object sender, EventArgs e)
        {
            Mostro guardiano;
            if (casuale.Next(2) == 0)
            {
                guardiano = new Mannaro();
            }
            else
            {
                guardiano = new Zombi();

            }
            MessageBox.Show("Verso come Mostro: "+guardiano.Verso());
            if(guardiano is Mannaro)
            {
                MessageBox.Show("Verso come Mannaro: " + (guardiano as Mannaro).Verso());
            }
            else if (guardiano is Zombi)
            {
                MessageBox.Show("Verso come Zombi: " + (guardiano as Zombi).Verso());
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (sender is Button)
            {
                (sender as Button).Text = "Cliccato";
            }
            if (sender is Label)
            {
                (sender as Label).BackColor = Color.Red;
            }
        }
    }
}
